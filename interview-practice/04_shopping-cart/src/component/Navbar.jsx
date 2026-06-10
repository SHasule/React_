import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import logo from "../public/logo.png"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-blue-600'>
      <div className='flex flex-row justify-between ' >
   <NavLink to="/">
   <img src={logo} width={200} height={200}/>
   </NavLink>
       
        <div>
          <NavLink to="/">
            <div><p>home</p></div>
          </NavLink>
         

         <NavLink to="/cart">
          <div>
          <p><FaShoppingCart/></p>
          </div>
         </NavLink>
        </div>

      </div>
    </div>
  )
}

export default Navbar