import React from 'react'
import Header from './Header'
import {useState} from "react"

const Login = () => {
    const [isSignIn,setIsSignIn]=useState(true)

    const toggleSignup=()=>{ 
         setIsSignIn(!isSignIn)
    }

  return (
    <div className="">
      <div className="absolute">
        <Header/>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ea534f76-b87f-4720-9605-cb29cfd9fefe/web/IN-en-20260810-TRIFECTA-perspective_5a83c581-2878-466b-87a0-19d0bf50f4bc_large.jpg" alt="bg-Img" />
      </div>

      <div className=" absolute bg-black w-3/12 text-white right-0 left-0 my-30 mx-auto opacity-80">
       <from className="flex flex-col gap-5 px-3 py-3 m-3">
        <h1 className="m-2 font-bold text-3xl">{isSignIn?"Sign In":"Sign Up"}</h1>
        {
            !isSignIn &&   <input className="py-2 m-2 px-3 w-full  bg-gray-700" type="text" placeholder="Full Name"/>
        }
        
          
           <input className="py-2 m-2 px-3 w-full  bg-gray-700" type="email" placeholder="Email Address"/>
           <input className="py-2 m-2 px-3 w-full  bg-gray-700 border-none " type="password" placeholder="Password"/>
           
           <button className=" py-2 m-2  w-full rounded cursor-pointer bg-red-600 font-bold text-white">Submit</button>
          
            <p className="m-2 text-sm cursor-pointer" onClick={toggleSignup}>
                {isSignIn?<span>New to NetFlix?<span className="text-blue-700 font-bold"> Signup now</span></span>:<span>Already Registered- <span className="font-bold text-blue-700">Sign In now...</span></span>}</p>          
       </from>
      </div>
    </div>
  )
}

export default Login
