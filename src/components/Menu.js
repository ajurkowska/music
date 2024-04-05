import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'; 
import '../styles/Menu.css';

const Menu = (props) => {
	return (
		<nav className='nav'>
			<ul className='nav__list'>
				<li className='nav__item'><NavLink to='/login' onClick={props.click}><FontAwesomeIcon icon={faUser} /></NavLink></li>
				<li className='nav__item'><NavLink to='/favorite'><FontAwesomeIcon icon={faHeart} /></NavLink></li>
			</ul>
		</nav>
	);
};

export default Menu;