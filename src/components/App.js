import React, { Component } from 'react';
import Header from './Header';
import Songs from './Songs';

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
		songs: [
			{
				id: '',
				title: '',
				artist: '',
				album: '',
				duration: '',
				rank: '',
				image: '',
				preview: ''
			},
		],
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('kliknięto');
		fetch(
			`https://deezerdevs-deezer.p.rapidapi.com/search?q=${this.state.value}`, options
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
					}));
          this.setState({
            songs,
			value: ''
          })
          console.log(songs);
				} else {
          console.error('brak danych z API');
        }
			})
      .catch(error => {
        console.error('Błąd: ', error);
      });
	};

	handleChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};

	render() {
		return (
			<React.Fragment>
				<Header
					value={this.state.value}
					change={this.handleChange}
					submit={this.handleSubmit}
				/>
				<Songs result={this.state}/>
			</React.Fragment>
		);
	}
}

export default App;