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
  
  //In order to add the clicked image to the selection state
  imageSelection = (event) => {
    let selected= this.state.select.concat(event.target.className);
    this.setState({ select: selected });
    console.log(event.target.className);
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

  // Reset after 2 clicks
  resetCycle = () => {
    this.setState({ clicked: 0, verso: !this.state.verso, select: [] });
      this.clearTimer();
  }

  // Rules of the Memory Game:

  //Conditions when image clicked
  handleClick = (event) => {
    this.setState({ clicked: this.state.clicked +1 });
    this.setState({ count:  this.state.count +1 })

    // Do nothing when background is clicked
    if(event.target.className === 'wrap'){
      this.setState({ clicked: this.state.clicked });
      this.setState({ count:  this.state.count });
    }

    // At first click
    if (this.state.clicked <1 ){
      this.imageSelection(event);
      this.setState({ verso: !this.state.verso });
    }

    // At second click
    const targetChar = event.target.className.charAt(0);
    const selectChar = this.state.select.map(letter => letter.charAt(0));
    
    //Condition to avoid clicking the same card twice.
    if (this.state.clicked && this.state.select.includes(event.target.className)){
      this.setState({ clicked: this.state.clicked })
      this.setState({ count:  this.state.count });
    }   
      // Successful pick - Founding pair condition
      else if (this.state.clicked === 1 && selectChar.includes(targetChar)){
        console.log('SAME');
        this.imageSelection(event);
        this.setState({ verso: true });
        let pairFound= this.state.found.concat(this.state.select,event.target.className);
        this.setState({ found: pairFound });

        // timeout 
        this.setTimer(500)
      }         
      // Unsuccessful pick 
      else if (this.state.clicked === 1 && !selectChar.includes(targetChar)){
        console.log('NOT SAME');
        this.imageSelection(event);
        this.setState({ verso: true });
        
        // timeout 
        this.setTimer(1000);
      }

    // Back up at 3rd click - To close turn cycle
    if(this.state.clicked === 2){
      this.resetCycle();
    }

    /*if(this.state.listLetters.some(i=>this.state.found.includes(i)) && (this.state.select[0].charAt(0)).includes((this.state.suspect[0]).charAt(0))){
      this.setState({ win: true });
    }*/

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

    this.setState({ listLetters:randomOddLetters, suspect: removedLetter });
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