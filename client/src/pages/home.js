import React, {Component, useState} from 'react';
import API from '../utils/api'
import StateContext from '../utils/globalBookData'
import BookSearch from '../Component/searchList/index'
import SearchBar from '../Component/searchBar';
import {Redirect} from 'react-router-dom'

function Home() {
    const [books, setBooks] = useState({});
    const [search, setSearch] = useState('');    
    

    function loadGoogle() {
        API.googleBooks(search)
        .then( res => {
            setBooks(res.data.items)  
        })
        .catch(err => console.log(err))
    }

    function saveGoogleBooks(currentBook) {
        API.saveBooks({
            id: currentBook.id,
            title: currentBook.volumeInfo.title,
            author: currentBook.volumeInfo.authors,
            synopsis: currentBook.volumeInfo.description,
            image: currentBook.volumeInfo.imageLinks.thumbnail
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }
    
    function handleInputChange(e) {
        const value = e.target.value;
        setSearch(value)
    };

    function handleSearch(e) {
        e.preventDefault()
        loadGoogle()
        setSearch('')
    }

    function handleKeyPress(e) {
        e.preventDefault()
        if(e.key === 'Enter' || e.key === 'enter') {
            loadGoogle()
            setSearch('')
        }
    }

    
    return(
        <div>
            <StateContext.Provider value={{books, saveGoogleBooks, handleSearch, loadGoogle, search, handleInputChange, handleKeyPress}}>
                
                {books.length > 0 ? 
                    <div>
                    <Redirect to={{
                        pathname: '/search',
                    }}></Redirect>
                    <BookSearch />
                    </div>
                    :
                    <div className='searchBar'><SearchBar /></div>
                }
            </StateContext.Provider>
        </div>
        
    )
}

export default Home