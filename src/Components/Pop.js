import React from 'react';
import './Pop.css'; 
import Popup from "reactjs-popup";

const Pop = ({ suspectProp }) => {
	return(
		<div className='container'> 
			<Popup trigger={<button className="button"> Suspect </button>} modal>
			    {close => (
			     	<div className="modal">
					        <a className="close" onClick={close}>
					          &times;
					        </a>
				        <div className="header"> You found the suspect... </div>
				        <div className="content">
				        	<img src={require(`./${suspectProp[0].charAt(0)}.jpeg`)} alt='Portrait'/>
				        	<img className='bars' src={require('./bars.png')} alt='bars'/>
				        </div>
				        <div className="actions">
				        	<button
				            className="button"
				            onClick={() => {
				              console.log('modal closed ')
				              close()
				            }}>
				            Start Over
				          	</button>
				        </div>
		      		</div>
		    	)}
  			</Popup>
		</div>
	)
}

export default Pop;