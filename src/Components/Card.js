import React from 'react';
import './Card.css';

const Card = ({ letterProp, faceProp, selectProp}) => {
	return(
		letterProp.map((letter,i,j) =>{
			return(
				<img id={`${selectProp.includes(letter) & (faceProp)?'face':''}`} 
				className={letter} key={i} src={require('./399772.jpg')} alt='Silhouette'
				/>
			)
		})
	);
}

export default Card;
//${selectProp==={letter} & faceProp?'face':''}