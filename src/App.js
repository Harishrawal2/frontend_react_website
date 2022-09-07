import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/service' element={<Services />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/dashboard' element={<Dashboard />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App