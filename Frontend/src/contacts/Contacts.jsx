import React from 'react'
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


function Contacts() {
    
    
  return (
    <>
    <NavBar />
    <div className='min-h-screen'>
        <Contact />
    </div>
    <Footer />
    </>
  )
}

export default Contacts;