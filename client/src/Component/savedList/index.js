import React, {useContext, useEffect} from "react";
import StateContext from "../../utils/globalBookData";

function SavedList() {
    const context = useContext(StateContext)

    

    return(
        <div>
            {console.log(context.bookData)}
            {context.bookData.map(data => {
                return(
                    <div>
                    <a href={'/saved/' + data._id}>
                        <div key={data.id}>
                            <h3>{data.title}</h3>
                            <p>Author: {data.author}</p>
                            <h4>Description: <p>{data.synopsis}</p></h4>
                        </div>
                    </a>
                    <button onClick={() => {context.deleteBook(data)}}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default SavedList;