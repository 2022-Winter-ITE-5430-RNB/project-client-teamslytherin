import React from 'react'
import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FAQS from './FAQ/FAQS'
import FileNotFound from './Home/FileNotFound'
import Footer from './Home/Footer';
import Events from './Events/Events'
import About from './About/About'
import Raise from './Raise/Raise'
import Home from './Home/Home'
import Navigation from './Home/Navigation'
import Clinics from './Clinic/Clinics';
import ContactForm from './ContactForm';
import AdoptRequest from './Requests/AdoptRequest'
import AdoptDetails from './Adoption/AdoptDetails';
import Rehome from './Rehome/Rehome';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Register from './Auth/Register';
import AuthContext from '../Context/AuthContext';
import PetDetails from './Adoption/PetDetails'

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('petid', '624330e6f946edf4e133f8b1');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };
  

  let approutes;
  if (isLoggedIn) {
    approutes = (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='FAQS' element={<FAQS />} />
        <Route path='Create' element={<AdoptRequest />} />
        <Route path='Contact' element={<ContactForm />} />
        <Route path='Events' element={<Events />} />
        <Route path='PetDetails' element={<PetDetails />} />
        <Route path='Contact' element={<ContactForm />} />
        <Route path='Clinics' element={<Clinics />} />
        <Route path='Rehome' element={<Rehome />} />
        <Route path='*' element={<FileNotFound />} />
        <Route path='About' element={<About />} />
        <Route path='Raise' element={<Raise />} />
        <Route path='Logout' element={<Logout />} /> 
      </Routes>
    );
  }
  else {
    approutes = (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='Contact' element={<ContactForm />} />
        <Route path='Contact' element={<ContactForm />} />
        <Route path='*' element={<FileNotFound />} />
        <Route path='About' element={<About />} />
        <Route path='Login' element={<Login />} />
        <Route path='Register' element={<Register />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout
        // profileImage: propic,
      }}
    >
      <BrowserRouter>
        <div>
          <Navigation />
          {approutes}
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default Header