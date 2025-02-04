import { useState } from "react"
import "./App.css"
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";


function App(){

   const[length,setLenght]=useState(8);
   const[numberAllowed,setNumberAllowed]=useState(false)
   const[charAllowed,setcharAllowed]=useState(false)
   const[password,setPassword]=useState("");

   const passwordRef=useRef(null)

   const copyClipBoard =useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,25)
    window.navigator.clipboard.writeText(password)
   },[password])

   const passwordGeneretor=useCallback(()=>{
     let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numberAllowed) str+="0123456789"
     if(charAllowed) str+="~!@#$%^&*()_+"
    
     for(let i=1;i<=length;i++){
           
      let char= Math.floor(Math.random()*str.length+1)
        
      pass+=str.charAt(char)
     }
     setPassword(pass)
  },
    [numberAllowed,charAllowed,length,setPassword])


    useEffect(()=>{
      passwordGeneretor()
    },
  [numberAllowed,charAllowed,length,setPassword])

  return(
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
           ref={passwordRef}
        />

        <button
            onClick={copyClipBoard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>

        <input 
        type="range"
        min={6}
        max={25}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLenght(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setcharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    </>
  )
}
export default App





