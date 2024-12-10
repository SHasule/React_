import React, { useRef, useState } from 'react'

function RefThree() {
  const countValue=useRef(0)
  const [name,setname]=useState("")
  function inputhandler(e){
    countValue.current=countValue.current+1
setname(e.target.value)
console.log(e.target.value);

  }
  return (
    <div>
      <input type="text" name='name' value={name} 
      onChange={inputhandler} />

      <h2>count value : {countValue.current}</h2>
    </div>
  )
}

export default RefThree