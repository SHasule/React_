import React, { useEffect, useState } from 'react'

export const UseEffectTest = () => {
   const [name, setName] = useState("")

  //  useEffect(()=>{
  //  console.log("ui render");
  //  })

//   useEffect(()=>{
//  console.log("ui render");
//   },[name])
 
 useEffect(()=>{
  
  console.log("event added");
  return()=>{
    console.log("event removed"); 
  } 
 },[name])

  function handlechange(event){
    console.log(name);
     setName(event.target.value)
  }
  return (
    <div className='app'>
      <p>UseEffectTest</p>

      <input type="text" onChange={handlechange} />

    </div>
  )
}
