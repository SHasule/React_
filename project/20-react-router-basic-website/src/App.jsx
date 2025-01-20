import React from 'react'
import Header from './component/header/header'
import Footer from './component/footer/Footer'
import About from './component/About/About'
import Contact from './component/contact/Contact'
import Home from './component/Home/Home'
import { Route,Routes } from 'react-router-dom'
import User from './component/User/User'

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
       

        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/user/:userid' element={<User/>} />

        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
