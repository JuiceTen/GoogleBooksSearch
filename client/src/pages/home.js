import React, {useState} from 'react';
import API from '../utils/api'
import StateContext from '../utils/globalBookData'
import BookSearch from '../Component/searchList/index'


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
            synopsis: currentBook.volumeInfo.description
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }
 

    function handleSearch(e) {
        e.preventDefault()
        loadGoogle()
    }

    
    return(
        <div>
            <input type = 'text' placeholder='e.g. harry potter'name='search' value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
            <StateContext.Provider value={{books, saveGoogleBooks}}>
                <BookSearch />
            </StateContext.Provider>
        </div>
        
    )
}

export default Home