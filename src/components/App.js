import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Header from './Header';
import Songs from './Songs';
import FavoriteList from './FavoriteList';
import ErrorPage from '../pages/ErrorPage';
import ErrorSearch from './ErrorSearch';
import Login from './Login';
import Logout from './Logout';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f9d6fbb61mshf0d9e7651bbf399p19388ajsn8ce5ddb5936b',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
	},
};

function App() {
	const [value, setValue] = useState('');
	const [songs, setSongs] = useState([]);
	const [showError, setShowError] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLogged, setIsLogged] = useState(false);
	const [loginError, setLoginError] = useState(null);
	const [showLogoutInfo, setShowLogoutInfo] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		console.log('kliknięto');
		fetch(
			`https://deezerdevs-deezer.p.rapidapi.com/search?q=${value}`,
			options
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Http error: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				if (data.data && data.data.length > 0) {
					const songList = data.data.map((song) => ({
						id: song.id,
						title: song.title,
						artist: song.artist.name,
						album: song.album.title,
						duration: song.duration,
						rank: song.rank,
						image: song.album.cover_medium,
						preview: song.preview,
						isFavorite: false,
					}));
					setSongs(songList);
					setValue('');
					setShowError(false);
				} else {
					console.error('Brak wyników wyszukiwania.');
					setShowError(true);
					setSongs([]);
					setValue('');
				}
			})
			.catch((error) => {
				console.error('Błąd: ', error);
			});
	}

	function handleToggleFavorite(id) {
		const updateSongs = [...songs];
		const index = updateSongs.findIndex((song) => song.id === id);
		updateSongs[index].isFavorite = !updateSongs[index].isFavorite;
		setSongs(updateSongs);
	}

	function handleChange(e) {
		setValue(e.target.value);
	}

	function handleChangeLogin(e) {
		const name = e.target.name;
		const value = e.target.value;
		if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		}
	}

	function handleLoginSubmit(e) {
		e.preventDefault();
		if (email === 'test@test.pl' && password === '1234') {
			setIsLogged(true);
			setLoginError(null);
		} else {
			setLoginError('Wprowadzone dane są nieprawidłowe.');
		}
	}

	function handleLogoutClick() {
		setShowLogoutInfo(true);
		setShowError(false);
	}

	function handleLogoutConfirm() {
		setIsLogged(false);
		setShowLogoutInfo(false);
	}

	function handleLogoutCancel() {
		setShowLogoutInfo(false);
	}

	return (
		<Router>
			<Header
				value={value}
				change={handleChange}
				submit={handleSubmit}
				click={handleLogoutClick}
				showLogoutInfo={showLogoutInfo}
			/>

			<Routes>
				{!showLogoutInfo && (
					<Route
						path="/"
						element={
							isLogged && !showLogoutInfo ? (
								<Songs result={songs} click={handleToggleFavorite} />
							) : (
								<Navigate to="/login" />
							)
						}
					/>
				)}

				{!showLogoutInfo && (
					<Route
						path="/favorite"
						element={
							isLogged && !showLogoutInfo ? (
								<FavoriteList songs={songs} click={handleToggleFavorite} />
							) : (
								<Navigate to="/login" />
							)
						}
					/>
				)}

				{showLogoutInfo && (
					<Route
						path="/"
						element={
							<Logout
								clickConfirm={handleLogoutConfirm}
								clickCancel={handleLogoutCancel}
							/>
						}></Route>
				)}
				<Route
					path="/login"
					element={
						!isLogged ? (
							<Login
								change={handleChangeLogin}
								submit={handleLoginSubmit}
								loginError={loginError}
							/>
						) : (
							<Navigate to="/" />
						)
					}
				/>
				<Route path="*" element={<ErrorPage />}></Route>
			</Routes>
			{showError && <ErrorSearch />}
		</Router>
	);
}

export default App;