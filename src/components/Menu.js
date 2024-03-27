import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-solid-svg-icons'; 
import '../styles/Menu.css';

const Menu = () => {
	return (
		<nav className='nav'>
			<ul className='nav__list'>
				<li className='nav__item'><a href='#'><FontAwesomeIcon icon={faUser} /></a></li>
				<li className='nav__item'><a href='#'><FontAwesomeIcon icon={faHeart} /></a></li>
			</ul>
		</nav>
	);
};

export default Menu;
