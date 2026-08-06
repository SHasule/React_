import React from 'react'
import './Header.css'
import {useState} from 'react'
import {LOGO_URL} from '../utils/constant'
import {Link} from "react-router-dom"
import useOnlineStatus from '../utils/useOnlineStatus'

const Header = () => {
  const [loginLogoutBtn,setLoginLogoutBtn]=useState("Login")
  const onlineStatus=useOnlineStatus();

  return (
    <div className='header'>
   <div>
       <img src={LOGO_URL}/>
   </div>
     <div className="nav-item">
        <ul>
          <li>Online Status:{onlineStatus?"🟢":"🔴"} </li>
          <li> <Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          
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