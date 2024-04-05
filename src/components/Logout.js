import React from 'react';
import '../styles/Logout.css';

const Logout = (props) => {
	return (
		<div className="logout__box">
			<p>Czy na pewno chcesz się wylogować?</p>
			<div className='box__btn'>
				<button className='box__btn-cancel' onClick={props.clickCancel}>Anuluj</button>
				<button className='box__btn-confirm' onClick={props.clickConfirm}>Wyloguj</button>
			</div>
		</div>
	);
};

export default Logout;
