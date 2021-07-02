import React, {useState, useEffect} from 'react';
import API from '../utils/api'
import StateContext from '../utils/globalBookData'
import SavedList from '../Component/savedList';
import {Route} from 'react-router-dom'

function SavedBooks() {

    const [bookData, setBookData] = useState({})

    const deleteBook = (currentBook) => {
        API.deleteBook(currentBook._id)
        .then(res => {
            console.log(res.data)
            getBooks()
    })
        .catch(err => console.log(err))
    }

    const getBook = (currentBook) =>{
        API.getBook(currentBook._id)
        .then(res => {
            console.log('books retrieved')        }
        )
    }

    const getBooks = () => {
        API.getBooks()
        .then(res => {
            console.log(res.data)

            setBookData(res.data)
        })
    }

    useEffect(() => {
        API.getBooks()
        .then(res => {
            console.log(res.data)

            setBookData(res.data)
        })
        .catch(err => console.log(err))
    },[])

    return(
        <div>
            {bookData.length > 0 ? 
            <StateContext.Provider value={{bookData, deleteBook, getBook}}>
                <SavedList />
            </StateContext.Provider>
            :
            <div>No Results</div>
        }
        </div>
    )
        
}

export default SavedBooks;