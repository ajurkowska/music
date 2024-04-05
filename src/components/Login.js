import React from 'react';
import '../styles/Login.css';

const Login = (props) => {

	return (
		<form className='login__form' onSubmit={props.submit}>
			<label>Adres e-mail:
				<input type="text" name="email" id="email" placeholder='test@test.pl' onChange={props.change}/>
			</label>
			<label>Hasło:
				<input type="password" name="password" id="password" placeholder='1234'onChange={props.change} />
			</label>
            {props.loginError && <div className='login__error'>{props.loginError}</div>}
			<button className='login__btn'>Zaloguj</button>
		</form>
	);
};

export default Login;
