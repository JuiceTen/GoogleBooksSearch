import React, {useState, useEffect} from 'react';
import API from '../utils/api'
import StateContext from '../utils/globalBookData'
import SavedList from '../Component/savedList';

function SavedBooks() {

    const [bookData, setBookData] = useState({})

    const deleteBook = (currentBook) => {
        API.deleteBook(currentBook._id)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
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
            <StateContext.Provider value={{bookData, deleteBook}}>
                <SavedList />
            </StateContext.Provider>
            :
            <div>No Results</div>
        }
        </div>
    )
        
}

export default SavedBooks;