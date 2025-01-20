import React from 'react'
import { useState } from 'react'

const Controlled = () => {
  const[name,setName]=useState("");
  const[lastname,setlastname]=useState("")

 function handleSubmit(event){
  event.preventDefault();
    console.log("name is: " ,name);
    
 }

 function changeVAlue(e){
    console.log(e.target.value);
    setName(e.target.value)
    
 }

 function lastNameChange(e){
  console.log(e.target.value);
    setlastname(e.target.value)
    
 }

  return (
    <form onClick={handleSubmit}>
      <label htmlFor="">name:</label>
          <input type="text" value={name} onChange={changeVAlue}/>
          <br />
          <br /><br /><br />
          <label htmlFor="">password</label>
          <input type="text" value={lastname} onChange={lastNameChange} />

          <input type="submit" />
    </form>
  )
}

export default Controlled
