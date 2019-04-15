import React from 'react';
import './Card.css';

const Card = ({ letterProp, versoProp, selectProp, foundProp }) => {
  return(
    letterProp.map((letter,i,j) =>{
      return(
        <img id={`${((selectProp.includes(letter) && versoProp)?'recto':'verso')||(foundProp.includes(letter)?'':'verso')}`} 
        className={letter} key={i} src={require('./'+`${letter.charAt(0)}`+'.jpeg')} alt='Silhouette'
        />
      )
    })
  );
}

export default Card;
