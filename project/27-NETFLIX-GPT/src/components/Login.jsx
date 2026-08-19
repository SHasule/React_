import React from 'react'
import Header from './Header'
import {useState,useRef} from "react"
import { checkValidation } from '../utils/FormValidation'

const Login = () => {
    const email=useRef(null)
    const password=useRef(null)
    const name=useRef(null)

    const [isSignIn,setIsSignIn]=useState(true)
    const [errorMsg,SetErrorMsg]=useState(null)

    const toggleSignup=()=>{ 
         setIsSignIn(!isSignIn)
    }

    const handleSubmitBTN=()=>{
        console.log(email.current.value);
        console.log(password.current.value) 

        const msg=checkValidation(email.current.value,password.current.value,name.current.value) 
        console.log(msg);
        SetErrorMsg(msg)
          
    }

  return (
    <div className="">
      <div className="absolute">
        <Header/>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ea534f76-b87f-4720-9605-cb29cfd9fefe/web/IN-en-20260810-TRIFECTA-perspective_5a83c581-2878-466b-87a0-19d0bf50f4bc_large.jpg" alt="bg-Img" />
      </div>

      <div className=" absolute bg-black w-3/12 text-white right-0 left-0 my-30 mx-auto opacity-80">
       <from onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-5 px-3 py-3 m-3">
        <h1 className="m-2 font-bold text-3xl">{isSignIn?"Sign In":"Sign Up"}</h1>
        {
            !isSignIn &&   <input ref={name} className="py-2 m-2 px-3 w-full  bg-gray-700" type="text" placeholder="Full Name"/>
        }
        
          
           <input ref={email} className="py-2 m-2 px-3 w-full  bg-gray-700" type="email" placeholder="Email Address"/>
           <input ref={password} className="py-2 m-2 px-3 w-full  bg-gray-700 border-none " type="password" placeholder="Password"/>
           <p className="text-red-600 font-bold">{errorMsg}</p>
           <button className=" py-2 m-2  w-full rounded cursor-pointer
               bg-red-600 font-bold text-white"
             onClick={handleSubmitBTN} >{isSignIn?"Sign in":"Sign Up"}</button>
          
            <p className="m-2 text-sm cursor-pointer" onClick={toggleSignup}>
                {isSignIn?<span>New to NetFlix?<span className="text-blue-700 font-bold"> Signup now</span></span>:<span>Already Registered- <span className="font-bold text-blue-700">Sign In now...</span></span>}</p>          
       </from>
      </div>
    </div>
  )
}

export default Login
