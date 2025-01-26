import React from 'react'
import "./App.css"
import { useState } from 'react'

const App = () => {
  const [name,setName]=useState("")
  const [email,setemail]=useState("")
  const [password,setPassword]=useState("")
  const [showname,setShowname]=useState("")
  // const[err,seterr]=useState("")

  function submitbtn(e){
     e.preventDefault()
       console.log(name);
       if(!name){
        alert("enter name")
       }   
       if(email){
        if(!email.includes("@gmail.com")){
        alert("enter proper email")
       }
       
       }
       if(!email)[
        alert("email ?")
       ]
       if(!password){
        alert('password')
       }
       
       if(name&&email&&password){
        setShowname(name)
       }

       setName("")
       setPassword("")
       setemail("")
       
  }
  return (
    <div>
  <form >
     <input type="text" placeholder='enter your name'
        value={name} onChange={(e)=>setName(e.target.value)}
     required />
     {!name&&<h2 className='red'>enter name</h2>}
     <br />  <br />
     <input type="email" placeholder='enter email'
      value={email} onChange={(e)=>setemail(e.target.value)}
     required />
     <br />  <br />
     <input type="password" placeholder='enter password'
      value={password} onChange={(e)=>setPassword(e.target.value)}
     required />

     <button onClick={submitbtn}>submit</button>

  </form>


  {
    showname.length>=1 && <p> your name is : {showname}</p>
  }

    </div>
  )
}

export default App
