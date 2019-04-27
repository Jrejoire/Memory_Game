import React from 'react';
import './Pop.css'; 
import Popup from "reactjs-popup";

class Pop extends React.Component{ 
	render(){
		const { winProp, countProp, suspectProp } = this.props;
		return(	
			<div className='container'>
				<Popup open={winProp}>
			       	<div className="modal">
					    <div className="header"> You found the suspect... </div>
				        <div className="content">
				        	<img src={require(`./${suspectProp[0]}.jpeg`)} alt='Portrait'/>
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
	  			</Popup>
  			</div>
		);
		
	}

}

export default Pop;