import React, {useContext, useEffect} from "react";
import StateContext from "../../utils/globalBookData";
import {Link} from 'react-router-dom'
import './savedlist.css'

function SavedList() {
    const context = useContext(StateContext)    

    return(
        <div>
            {console.log(context.bookData)}
            {context.bookData.map(data => {
                return(
                    <div key={data.id} className='savedBooks'>
                    <Link className='savedSearch' to ={'/saved/'+ data._id}>
                        <div>
                            <h3 className='title'>{data.title}</h3>
                            <img src = {data.image}/>
                            <p className='author'>Author: <strong>{data.author}</strong></p>
                            <h4 className='desc'>Description: </h4>
                            <p className='details'>{data.synopsis}</p>
                        </div>
                    </Link>
                    <button onClick={() => {context.deleteBook(data)}}>Delete</button>
                    
                    </div>
                )
            })}
        </div>
    )
}

export default SavedList;