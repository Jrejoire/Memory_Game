import React from 'react';
import './Pop.css'; 
import Popup from "reactjs-popup";

const Pop = ({ suspectProp, countProp, winProp }) => {
	return(
		<div className='container'> 
			<Popup trigger={{winProp}===true} modal>
			    {Popup => (
			     	<div className="modal">
					    <div className="header"> You found the suspect... </div>
				        <div className="content">
				        	<img src={require(`./${suspectProp[0].charAt(0)}.jpeg`)} alt='Portrait'/>
				        	<img className='bars' src={require('./bars.png')} alt='bars'/>
				        	<p>You made it in {`${countProp}`} moves! Not Bad...</p>
				        </div>
				        <div className="actions">
				        	<button
					        className="button"
					            onClick={()=>{window.location.reload()}}
					            >
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