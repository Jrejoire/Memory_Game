import React from 'react';
import './Navbar.css';

const Nav = () =>{
	return(
		<div className='navcontainer'>
			<h1 className='item'>MEMORY GAME: </h1>
			<h2 className='item'>Investigation Edition</h2>
			<svg className='svg' width="90" height="90">
				<img src="./arrows.svg" alt="./arrowimage.jpg" width="90" height="90" />
			</svg>
		</div>
	)
}

export default Nav;