import React from 'react';
import Song from './Song';

const FavoriteList = (props) => {
    
const favoriteList = props.songs.filter((song) => song.isFavorite);
console.log(favoriteList);

    return ( 
        <ul className='list__container'>
			{favoriteList.map(song => (
				<Song key={song.id} result={song} click={props.click} />
			))}
		</ul>
     );
}
 
export default FavoriteList;