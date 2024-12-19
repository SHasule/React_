import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const {cart}=useSelector((state)=>state)
  return (
    <div className=''>
       <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
              <NavLink to="/" >
                <div className='ml-5'> 
                  <img src="" alt="some img" className='h-12'/>
                 </div>
              </NavLink>
              
            <div className='flex items-center text-slate-50 font-medium mr-5 space-x-6 '>
            <NavLink to="/">         
              <p className=''>Home</p>          
              </NavLink>

              <NavLink to="/cart">            
             <div className='relative'>
             <FaShoppingCart  className='text-2xl'/>
            {
              cart.length > 0 &&
              <span className='absolute -top-1 -right-2 text-white bg-green-600 h-5 w-5 flex items-center justify-center
              rounded-full animate-bounce'>{cart.length}</span>

            }
             </div>
              </NavLink>
            </div>
          
     
       </nav>
    </div>
  )
}

export default Navbar       