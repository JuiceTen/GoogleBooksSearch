import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import API from '../utils/api';


function BookPage() {
    const {id} = useParams()
    const [book, setBook] = useState({
        id: '',
        _id: '',
        title: '',
        author: [],
        synopsis: '',
    })
    
    useEffect(() => {
        API.getBook(id)
        .then(res => { 
            setBook(res.data)
    })
        .catch(err => console.log(err))
        
    }, [])

        
    return(
        <div>
            <div>
                <h1>
                    {book.title} by {book.author.length > 0 ? book.author.join(', ') : book.author}
                </h1>
                <article>
                    <h1>Description</h1>
                    <p>{book.synopsis}</p>
                </article>

                <Link to = '/saved'>
                    <p>return</p>
                </Link>

                
            </div>
        </div>
    )
}

export default BookPage;