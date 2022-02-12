import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FAQS from './FAQ/FAQS'
import FileNotFound from './Home/FileNotFound'
import Footer from './Home/Footer'
import Home from './Home/Home'
import Navigation from './Home/Navigation'

const Header = () => {
  return (    
    <BrowserRouter>    
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />        
        <Route path='FAQS' element={<FAQS />} />
        <Route path='*' element={<FileNotFound />} />
      </Routes>
      <Footer />    
  </BrowserRouter>
  )
}

export default Header