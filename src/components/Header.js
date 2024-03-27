import React from 'react';
import Menu from './Menu';
import Search from './Search';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';

const Header = () => {
	return (
		<header className="header">
			<div className="header__box">
				<div className="header__brand">
					<a href="#">
						<FontAwesomeIcon icon={faHeadphones} className="logo__icon" />
					<h1 className="logo__name">MusicApp</h1>
                    </a>
				</div>
				<Menu />
			</div>
            <Search />
		</header>
	);
};

export default Header;
