import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';
import '../styles/Search.css';

const Search = (props) => {
    return ( 
        <form className='form' onSubmit={props.submit}>
            <input type="text" placeholder='Song search' value={props.value} onChange={props.change}/>
            <button className='form__btn'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
     );
}
 
export default Search;