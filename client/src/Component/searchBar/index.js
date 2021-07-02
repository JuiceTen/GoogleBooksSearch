import React, {useContext} from 'react';
import StateContext from '../../utils/globalBookData';
import './searchbar.css'
import HomeComponent from '../HomeComponent';
function SearchBar() {
    const context = useContext(StateContext)
    
    return (
        <div className='searchWrap'>
        <HomeComponent />
        <input type = 'text' placeholder='e.g. harry potter' name='search' value={context.search} onKeyUp={(e) => {context.handleKeyPress(e)}} onChange={(e) => {context.handleInputChange(e)}}/>
        <button onClick={(e) => {context.handleSearch(e)}}>Search</button>
        </div>
    )
}

export default SearchBar