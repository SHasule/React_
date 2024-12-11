import React from 'react'
import Navbar from './component/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './page/Home'
import { Cart } from './page/Cart'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>

      <div>
        <Routes>
          <Route to="/" element={<Home/>} />
          <Route to="/cart" element={<Cart/>}  />
        </Routes>
      </div>
    </div>
  )
}

export default App