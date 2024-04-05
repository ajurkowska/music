import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Menu from './Menu';
import Search from './Search';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';

const Header = (props) => {
	const location = useLocation();
	const isMainPage = location.pathname === '/';

	return (
		<header className="header">
			<div className="header__box">
				<div className="header__brand">
					<Link to="/">
						<FontAwesomeIcon icon={faHeadphones} className="logo__icon" />
						<h1 className="logo__name">MusicApp</h1>
					</Link>
				</div>
				<Menu click={props.click}/>
			</div>
			{isMainPage && <Search value={props.value} change={props.change} submit={props.submit} />}
		</header>
	);
};

export default Header;