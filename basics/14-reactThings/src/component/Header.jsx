import React from 'react'
import {useState,useContext} from 'react'
import {LOGO_URL} from '../utils/constant'
import {Link} from "react-router-dom"
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
const Header = () => {
  const [loginLogoutBtn,setLoginLogoutBtn]=useState("Login")
  const onlineStatus=useOnlineStatus();
  const {LoggedUser}=useContext(UserContext)


  
  return (
    <div className='flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 md:bg-green-100 lg:bg-blue-100'>
   <div className=''>
       <img src={LOGO_URL}/>
   </div>
     <div className="">
        <ul className="flex py-10 gap-10 px-3  ">
          <li>Online Status:{onlineStatus?"🟢":"🔴"} </li>
          <li className="hover:text-amber-950 "> <Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
        
           <button className="login" onClick={()=> 
            loginLogoutBtn ==="Login"? 
            setLoginLogoutBtn("Logout"):
            setLoginLogoutBtn("Login")
            }>{loginLogoutBtn}</button>
            
          
        </ul>
 
       <div>{LoggedUser}</div>
     </div>
    </div>
  )
}

export default Header