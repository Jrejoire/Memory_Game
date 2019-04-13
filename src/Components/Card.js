import React from 'react';
import './Card.css';

const Card = ({ letterProp, faceProp, selectProp, foundProp }) => {
  return(
    letterProp.map((letter,i,j) =>{
      return(
        <img id={`${(selectProp.includes(letter) && faceProp)||foundProp.includes(letter)?'face':''}`} 
        className={letter} key={i} src={require('./399772.jpg')} alt='Silhouette'
        />
      )
    })
  );
}

export default Card;
