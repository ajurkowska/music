import React from 'react';
import '../styles/Song.css';

const Song = (props) => {
	const { title, artist, album, duration, rank, image, preview } = props.result;

	const formatTime = (duration) => {
		const minutes = Math.floor(duration / 60);
		const seconds = duration % 60;
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
		}
	
	return (
		<li className="list__item">
			<img src={image} alt="title" />
			<div className="item__info">
				<span>{title}</span>
				<p>Artist: {artist}</p>
				<p>Album: {album}</p>
				<p>Duration: {formatTime(duration)}</p>
				<p>Rank: {rank}</p>
			</div>
			<audio controls>
				<source src={preview} type="audio/mpeg" />
			</audio>
		</li>
	);
};

export default Song;