import React, { Component } from 'react';
import './App.css';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar';
import Pop from '../Components/Pop';

class App extends Component {
  constructor(){
    super()
    this.state = {
      listLetters:[],
      select:[],
      found:[],
      verso:false,
      clicked:0,
      count:0,
      suspect:'',
      win:false
    }
  }
  
  //////Timer functions
  setTimer = (delay) => {
    if (this.timerHandle) {
      return;
    }
    this.timerHandle = setTimeout(() => {
      this.setState({ clicked: 0, verso: !this.state.verso, select: [] });
      this.timerHandle = 0;
    }, delay);
  }
  clearTimer = () => {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  };

  comparingLetterArr = () => {
    const { listLetters, found, suspect } = this.state;
    const foundNoWrap = found.filter(letter=>letter!=='wrap');
    const foundFinal = foundNoWrap.concat(suspect);

      return foundFinal.length === listLetters.length
  }
  
  //In order to add the clicked image to the selection state
  imageSelection = (event) => {
    let selected= this.state.select.concat(event.target.className);
    this.setState({ select: selected });
    console.log(event.target.className);
  }

  // Rules of the Memory Game:

  //Conditions when image clicked
  handleClick = (event) => {
    const { clicked, count, verso, select, found, suspect } = this.state;
    //Never action when background is clicked
    if (event.target.className !== 'wrap'){
            
      // At first click
      this.setState({ clicked: clicked +1 });
      this.setState({ count:  count +1 });
            
      if (clicked <1){
        this.imageSelection(event);
        this.setState({ verso: !verso });
      }
    
      // At second click
      const targetChar = event.target.className.charAt(0);
      const selectChar = select.map(letter => letter.charAt(0));
      
      //Condition to avoid clicking the same card twice.
      if (clicked && select.includes(event.target.className)){
        this.setState({ clicked: clicked })
        this.setState({ count:  count });
      }   
        // Successful pick - Founding pair condition
        else if (clicked === 1 && selectChar.includes(targetChar)){
          console.log('SAME');
          this.imageSelection(event);
          this.setState({ verso: true });
          let pairFound= found.concat(select,event.target.className);
          this.setState({ found: pairFound });

          // timeout 
          this.setTimer(500)
        }         
        // Unsuccessful pick 
        else if (clicked === 1 && !selectChar.includes(targetChar)){
          console.log('NOT SAME');
          this.imageSelection(event);
          this.setState({ verso: true });
          
          // timeout 
          this.setTimer(1000);
        }

      // Back up at 3rd click - To close turn cycle
      if(clicked === 2){
        this.setState({ clicked: 0, verso: !verso, select: [] });
        this.clearTimer();
      }

      //Winning condition
      if(this.comparingLetterArr() && suspect.includes(targetChar)){
        this.setState({ win: true });
      }
    }
      else if(event.target.className === 'wrap'){
      this.setState({ clicked: clicked });
      this.setState({ count:  count });
      this.setState({ verso: verso });
      }
    }

  componentWillMount(){
  //Preparing the list of letters (Shuffle + Random)
    function shuffle(arr){
        let i,j,x;
        for (i =arr.length-1; i>0; i--){
          j = Math.floor(Math.random()*(i+1));
          x =arr[i];
          arr[i] = arr[j];
          arr[j] = x;
        }
        return arr;
    }
    const letters = ['A','A2','B','B2','C','C2','D','D2','E','E2','F','F2','G','G2','H','H2','I','I2','J','J2','K','K2'];
    const i = Math.floor(Math.random()*11);
    const oddLetters = letters.slice(0,i).concat(letters.slice(i+1, letters.length));
    const randomOddLetters = shuffle(oddLetters);
    
    const removedLetter = letters.filter(letter => !randomOddLetters.includes(letter));
    const removedLetterChar = removedLetter[0].charAt(0);

    this.setState({ listLetters:randomOddLetters, suspect: removedLetterChar });
  }
    ////////////////////////////////////////////////////////

  render() {
    const { listLetters, verso, select, found, count, suspect, win } = this.state;
    return (
      <div className='html'>
        <Navbar />
        <div className = 'body'>
          <div className='wrap' onClick={this.handleClick}>
            <Card letterProp={listLetters} versoProp={verso} selectProp={select} foundProp={found}/> 
          </div>
          <Pop suspectProp={suspect} countProp={count} winProp={win}/>
          <h2>Total clicks: {count}</h2>
        </div>
      </div>
    )
  }
}

export default App;