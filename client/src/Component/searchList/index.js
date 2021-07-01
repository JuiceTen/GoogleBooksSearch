import React, {useContext} from 'react'
import StateContext from '../../utils/globalBookData'


function BookSearch() {
    const context = useContext(StateContext)
    
    return(
        <div>
            {console.log(context.books)}
        {context.books.length > 0 ? context.books.map(data => {
            return (
            <div key = {data.id}>
                <h4>{data.volumeInfo.title}</h4>
                <p> Author: <strong>{data.volumeInfo.authors.length > 1 ? data.volumeInfo.authors.join(', ') : data.volumeInfo.authors}</strong></p>
                <p> Release: {data.volumeInfo.publishedDate}</p>
                <h5>Description:</h5>
                <p>{data.volumeInfo.description}</p>
                <button onClick={() => {context.saveGoogleBooks(data)}}>Save</button>
            </div>

            )
        }): <div></div>}
        </div>
    )
}

export default BookSearch;