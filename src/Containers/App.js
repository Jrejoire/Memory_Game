import React, { Component } from 'react';
import './App.css';
import Card from '../Components/Card';

class App extends Component {
	constructor(){
		super()
		this.state = {
			listLetters:[],
			select:[],
			found:[],
			face:false,
			clicked:0
		}
	}

	imageSelection = (event) => {
		let selected= this.state.select.concat(event.target.className);
		this.setState({ select: selected });
		console.log(event.target.className);
	}

	handleClick = (event) => {
		this.setState({ clicked: this.state.clicked +1 })

		if (this.state.clicked <1 ){
		this.imageSelection(event);
		this.setState({ face: !this.state.face });
		}

		const targetChar = event.target.className.charAt(0);
		const selectChar = this.state.select.map(letter => letter.charAt(0));

		if (this.state.clicked >=1 && this.state.select.includes(event.target.className)){
		this.setState({ clicked: this.state.clicked })
		}		
			else if (this.state.clicked >= 1 && selectChar.includes(targetChar)){
				console.log('SAME');
				this.imageSelection(event);
				this.setState({ face: true });
			}					
			else if (this.state.clicked >= 1 && !selectChar.includes(targetChar)){
				console.log('NOT SAME');
				this.imageSelection(event);
				this.setState({ face: true });
			}
		if(this.state.clicked === 2){
			this.setState({ clicked: 0});
			this.setState({ face: !this.state.face });
			this.setState({ select: [] });
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
  	
  		this.setState({ listLetters:randomOddLetters });
  	}
  	////////////////////////////////////////////////////////

	render() {
		const { listLetters, face, select } = this.state;
		return (
		    <div className = 'body'>
		      <div className="App">
		        <h1>PI</h1>
		        <h2 >Puzzle Investigator</h2>
		        <br />
		        <div className='container' onClick={this.handleClick}>
		        <Card letterProp={listLetters} faceProp={face} selectProp={select}/> 
		        </div>
		      </div>
		    </div>
	    );
	}

}

export default App;


/*at render page:
delete random card --- DONE

when first card clicked: ---DONE
	-change image --- DONE
when second card clicked 
	- change image

if className first card = className second card then:
-border green
- msg (validation)

otherwise 
timer 3s then change both image back

when only K left + k clicked
- win message*/

/* 
	1/click on 1 image
	2/click on 2nd image
	3/ if image1 === image2 then set id to face permanently
	-otherwise timer 3 s to face false all + select ''
*/