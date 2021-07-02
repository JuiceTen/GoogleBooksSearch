import React from 'react';
import {Link} from 'react-router-dom'
import './nav.css'

function Nav() {

    return(
        <nav>
            <ul>
                <li>
                    <a className='link' href='/'>
                        <p>Home</p>
                    </a>
                </li>
                <li>
                    <a className='link' href='/saved'>
                        <p>Saved Books</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;