import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const Two = () => {
  const [add,setAdd]=useState(0)
  const[minus,setminus]=useState(100)

  function multiply(){
    console.log("*****");
    return add*2
  }

  const mulicount=useMemo(  function multiply(){
    console.log("*****");
    return add*2
  },[add])


  return (
    <div>
      
      {mulicount}
      <br />

      <button onClick={()=>setAdd(add+1)} >add</button>
      <h3>{add}</h3>

      <button onClick={()=>setminus(minus-1)}>minus</button>
      <h3>{minus}</h3>
    </div>
  )
}

export default Two
