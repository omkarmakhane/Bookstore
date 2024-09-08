import React from 'react'
import Home from './home/Home'

import { Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Contacts from './contacts/Contacts'
import Abouts from './components/About'
import Signup from "./components/Signup"


function App() {
  return (
    <>
   <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Course" element={<Courses />} />
      <Route path="/Contact" element={<Contacts />} />
      <Route path="/About" element={<Abouts />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>

   </div>
    </>
  )
}

export default App
