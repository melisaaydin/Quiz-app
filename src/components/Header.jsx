import React from 'react'
import { Link } from "react-router-dom";
import '../css/Header.css'
function Header() {
    return (
        <div className='header'>
            <div className='main'>
                <Link className='link' to="/">Homepage</Link>
            </div>
            <div className='detail'>
                <Link className='link' to="/about">About</Link>
                <Link className='link' to="/contact">Contact</Link>
                <Link className='link' to="/signin">Sign In</Link>
                <Link className='link' to="/startquiz">Start Quiz</Link>
            </div>

        </div>
    )
}

export default Header
