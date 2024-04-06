import React from 'react';
import '../styles/Song.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Song = (props) => {
	const { id, title, artist, album, duration, rank, image, preview, isFavorite } = props.result;

	const formatTime = (duration) => {
		const minutes = Math.floor(duration / 60);
		const seconds = duration % 60;
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};

	return (
		<li className="list__item">
			<div className="item__img">
				<img src={image} alt="album cover" />
				<FontAwesomeIcon icon={faHeart} className={`item__icon ${isFavorite ? 'item__icon-favorite' : ''}`} onClick={() => props.click(id)}/>
			</div>
			<div className="item__info">
				<h2>{title}</h2>
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