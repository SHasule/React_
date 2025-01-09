import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
// import logo from "../public/logo"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
         <div className='flex flex-row justify-between'>

         <NavLink to="/" >
          <div>
          <img src="../logo.png" alt="" height={71} width={70}/>
          </div>
         </NavLink>

          <div>
            <NavLink to="/">
            <p>Home</p>
            </NavLink>
          
            <NavLink to="/cart">
              <div>
              <FaShoppingCart />
              </div>
            </NavLink>

          </div>
         </div>
    </div>
  )
}

export default Navbar
