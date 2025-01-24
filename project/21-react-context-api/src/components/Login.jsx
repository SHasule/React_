import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import Usercontext from '../context/Usercontext'

const Login = () => {

  const [userName,setUserName]=useState("")
  const [password,setPassword]=useState("")

  const {setUser}= useContext(Usercontext)

  function handleSubmit(e){
    e.preventDefault()
    setUser({userName,password}) 
    
  }

  return (
    <>
    <h2>login</h2>
         <input type="text" placeholder='userName' value={userName}
          onChange={(e)=>setUserName(e.target.value)} /> 
     {" "}
         <input type="text" placeholder='password' value={password}
         onChange={(e)=>setPassword(e.target.value)}  /> 

         <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login
