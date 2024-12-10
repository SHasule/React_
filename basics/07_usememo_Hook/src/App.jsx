import { useState } from 'react'

import './App.css'
import { useMemo } from 'react';
import Two from './Two';

function App() {

   const[count,setcount]=useState(0)
   const[number,setnumber]=useState(0)

   function expensiveFunction (num){
    console.log("render");
    for(let i=0;i<100000;i++){}
      return num*2
   }
   let dubbleValue=useMemo(() =>expensiveFunction(number) , [number])

  
    

  return (
   <div>
     
      <button onClick={()=>setcount(count+1)}>increment</button>
      <h3>count : {count}</h3>

  <input type="number" value={number} onChange={(e)=>setnumber(e.target.value)} />

      <h3>double is: {dubbleValue}</h3>
      <br /><br />

      <Two />

   </div>
  )
}

export default App
