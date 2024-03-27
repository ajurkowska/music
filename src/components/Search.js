import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';
import '../styles/Search.css';

const Search = () => {
    return ( 
        <form className='form'>
            <input type="text" placeholder='Song search'/>
            <button className='form__btn'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
     );
}
 
export default Search;