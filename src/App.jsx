import { useState } from 'react'
import Quiz from './components/Quiz'
import { Routes, Route } from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import SignIn from './pages/SignIn'
import Contact from './pages/Contact'
import About from './pages/About'
import StartQuiz from './pages/StartQuiz'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='startquiz' element={<StartQuiz />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </div>
    </>
  )
}

export default App
