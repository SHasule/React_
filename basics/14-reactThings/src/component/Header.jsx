import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
   <div>
       <h1>logo</h1>
   </div>
     <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
     </div>
    </div>
  )
}

export default Header