import React, {useState, useEffect} from 'react';
import API from '../utils/api'

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

 

    function handleSearch(e) {
        e.preventDefault()
        loadGoogle()
    }

    
    return(
        <div>
            <input type = 'text' placeholder='e.g. harry potter'name='search' value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
            {console.log(books)}
            {books.length > 0 ? books.map(data => {
                return (
                <div key = {data.accessInfo.id}>
                    
                    <h4>{data.volumeInfo.title}</h4>
                    <p> Author: <strong>{data.volumeInfo.authors}</strong></p>
                    <p> Release: {data.volumeInfo.publishedDate}</p>
                    <h5>Description:</h5>
                    <p>{data.volumeInfo.description}</p>
                </div>

                )
            }): <div></div>}
        </div>
    )
}

export default Home