import React from 'react';
import Song from './Song';
import '../styles/Songs.css';

const Songs = (props) => {
	return (
		<ul className='list__container'>
			{props.result.map(song => (
				<Song key={song.id} result={song} click={props.click}/>
			))}
		</ul>
	);
};

export default Songs;