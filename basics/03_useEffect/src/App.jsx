import { useEffect, useState } from 'react'
import { UseEffectTest } from './component/UseEffectTest';

import './App.css'

function App() {
 
  const [text, setText] = useState('')

  // useEffect(()=>{
  //   console.log("useEffect Added");
  // })

  // useEffect(()=>{
  //   console.log("text changed");
  // },[text])
  
  // useEffect(()=>{
  //   console.log(`event added`);
  //  return()=>{
  //   console.log(`event removed`);  
  //  }
  // },[text])

  function handleClick(e){
    console.log(text);
    setText(e.target.value);
  }

  return (
    <>
      <div>
          <input type="text" onChange={handleClick} />

          <UseEffectTest></UseEffectTest>
      </div>
    </>
  )
}

export default App
