import { useState } from 'react'
import './App.css'

import React from 'react'


const App = () => {

   const [color,setcolor]=useState("green")
  return (
    <div className=' w-full h-screen duration-200'
    style={{backgroundColor:color}}>
       
        <div className='flex gap-3 justify-center items-center'>
               <button
               onClick={()=>setcolor("red")}
                className='bg-red-600 text-white p-2 rounded-md '
               >red</button>  
               <button
               onClick={()=>setcolor("blue")}
                className='bg-blue-600 text-white p-2 rounded-md '
               >blue</button>  
               <button
               onClick={()=>setcolor("black")}
                className='bg-black text-white p-2 rounded-md '
               >black</button>  
               <button
               onClick={()=>setcolor("yellow")}
                className='bg-yellow-600 text-white p-2 rounded-md '
               >yellow</button>  
        </div>
    </div>
  )
}

export default App
