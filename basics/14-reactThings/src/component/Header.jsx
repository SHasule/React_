import React from 'react'
import './Header.css'
import {useState} from 'react'
import {LOGO_URL} from '../utils/constant'
const Header = () => {
  const [loginLogoutBtn,setLoginLogoutBtn]=useState("Login")
  return (
    <div className='header'>
   <div>
       <img src={LOGO_URL}/>
   </div>
     <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
           <button className="login" onClick={()=> 
            loginLogoutBtn ==="Login"? 
            setLoginLogoutBtn("Logout"):
            setLoginLogoutBtn("Login")
            }>{loginLogoutBtn}</button>
        </ul>

       
     </div>
    </div>
  )
}

export default Header