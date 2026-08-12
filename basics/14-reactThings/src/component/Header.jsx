import React from 'react'
import {useState,useContext} from 'react'
import {LOGO_URL} from '../utils/constant'
import {Link} from "react-router-dom"
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import {useSelector} from "react-redux"
const Header = () => {
  const [loginLogoutBtn,setLoginLogoutBtn]=useState("Login")
  const onlineStatus=useOnlineStatus();
  const {LoggedUser}=useContext(UserContext)

  const cartItem=useSelector((store)=>store.cart.item)
  
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
          <li>cart ({cartItem.length} item)</li>
        
           <button className="login" onClick={()=> 
            loginLogoutBtn ==="Login"? 
            setLoginLogoutBtn("Logout"):
            setLoginLogoutBtn("Login")
            }>{loginLogoutBtn}</button>
            
          <li>{LoggedUser}</li>
        </ul>
 
     </div>
    </div>
  )
}

export default Header