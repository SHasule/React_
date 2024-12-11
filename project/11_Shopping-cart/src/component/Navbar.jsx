import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div >
       <div className='flex felx-row justify-between '>
        <NavLink to="/">
        <img src="" alt="img" />
        </NavLink>
          
          <div>
             <NavLink to="/">
             <p>Home</p>
             </NavLink>
         
            <NavLink to="/cart">
            <FaShoppingCart />
            </NavLink>
        </div>
       </div>
    </div>
  )
}

export default Navbar