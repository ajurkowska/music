import React, { Component } from 'react';
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
import Error from './Error';
import Login from './Login';
import Logout from './Logout';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f9d6fbb61mshf0d9e7651bbf399p19388ajsn8ce5ddb5936b',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
	},
};

class App extends Component {
	state = {
		value: '',
		songs: [],
		error: null,
		email: '',
		password: '',
		isLogged: false,
		loginError: null,
		showLogoutInfo: false,
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('kliknięto');
		fetch(
			`https://deezerdevs-deezer.p.rapidapi.com/search?q=${this.state.value}`,
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
					const songs = data.data.map((song) => ({
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
					this.setState({
						songs,
						value: '',
						error: null,
					});
				} else {
					console.error('brak danych z API');
					this.setState({
						error: <Error />,
						songs: [],
						value: '',
					});
				}
			})
			.catch((error) => {
				console.error('Błąd: ', error);
			});
	};

	handleToggleFavorite = (id) => {
		const songs = [...this.state.songs];
		const index = songs.findIndex((song) => song.id === id);
		songs[index].isFavorite = !songs[index].isFavorite;
		this.setState({
			songs,
		});
	};

	handleChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};

	handleChangeLogin = (e) => {
		const name = e.target.name;
		this.setState({
			[name]: e.target.value,
		});
	};

	handleLoginSubmit = (e) => {
		e.preventDefault();
		if (this.state.email === 'test@test.pl' && this.state.password === '1234') {
			this.setState({
				isLogged: true,
			});
		} else {
			this.setState({
				loginError: 'Wprowadzone dane są nieprawidłowe.',
			});
		}
	};

	handleLogoutClick = () => {
		this.setState({
			showLogoutInfo: true,
		});
	};

	handleLogoutConfirm = () => {
		this.setState({
			isLogged: false,
			showLogoutInfo: false,
		});
	};

	handleLogoutCancel = () => {
		this.setState({
			showLogoutInfo: false,
		});
	};

	render() {
		const { isLogged, showLogoutInfo } = this.state;

		return (
			<Router>
				<Header
					value={this.state.value}
					change={this.handleChange}
					submit={this.handleSubmit}
					click={this.handleLogoutClick}
				/>
				{this.state.error ? <Error /> : ''}

				<Routes>
					{!showLogoutInfo && (
						<Route
							path="/"
							element={
								isLogged && !showLogoutInfo ? (
									<Songs
										result={this.state}
										click={this.handleToggleFavorite}
									/>
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
									<FavoriteList
										songs={this.state.songs}
										click={this.handleToggleFavorite}
									/>
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
									clickConfirm={this.handleLogoutConfirm}
									clickCancel={this.handleLogoutCancel}
								/>
							}></Route>
					)}
					<Route
						path="/login"
						element={
							!isLogged ? (
								<Login
									change={this.handleChangeLogin}
									submit={this.handleLoginSubmit}
									loginError={this.state.loginError}
								/>
							) : (
								<Navigate to="/" />
							)
						}
					/>
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
			</Router>
		);
	}
}

export default App;
