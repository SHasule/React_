import React, { useEffect, useState } from 'react'
import Home from './page/Home'
import Dashboad from './page/Dashboad'
import Login from './page/Login'
import Signup from './page/SignUP'
import { Routes , Route} from 'react-router-dom'
import Navbar from './component/Navbar'
const App = () => {
  const [isloggedin,setIsloggedin]=useState(false)
 
   useEffect(()=>{

    console.log("inside app");
    setIsloggedin(false)
    
   })

  return (
    <div>
      <Navbar isloggedin={isloggedin} setIsloggedin={setIsloggedin} />
     
      <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login setIsloggedin={setIsloggedin} />} />
      <Route path="/signup" element={<Signup setIsloggedin={setIsloggedin}/>} />
      <Route path="/dashboard" element={<Dashboad/>} />
      </Routes>
    </div>
  )
}

export default App