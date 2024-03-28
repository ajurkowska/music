import React from 'react';
import Song from './Song';
import '../styles/Songs.css';

const Songs = (props) => {
	return (
		<ul className='list__container'>
			{props.result.songs.map(song => (
				<Song key={song.id} result={song}/>
			))}
		</ul>
	);
};

export default Songs;
