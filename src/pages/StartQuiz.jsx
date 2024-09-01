import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../css/StartQuiz.css'
import Navbar from '../components/Navbar'
function StartQuiz() {

    return (
        <div className='body'>
            <Navbar />
            <div className='startquiz'>
                <Link className='links' to="/quiz">Quiz 1</Link>
            </div>

        </div>
    )
}

export default StartQuiz