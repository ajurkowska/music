import React from 'react';
import '../styles/Song.css';

const Song = (props) => {
	const { title, artist, album, duration, rank, image, preview } = props.result;
	return (
		<li className="list__item">
			<img src={image} alt="title" />
			<div className="item__info">
				<span>{title}</span>
				<p>{artist}</p>
				<p>{album}</p>
				<p>{(duration / 60).toFixed(2)}</p>
				<p>{rank}</p>
			</div>
			<audio controls>
				<source src={preview} type="audio/mpeg" />
			</audio>
		</li>
	);
};

export default Song;