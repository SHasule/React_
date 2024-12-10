import React, { useRef, useState } from 'react'

const RefTwo = () => {
  const [time,settime]=useState(0);
  const timer=useRef()

  function Starttimer(){
    timer.current=  setInterval(()=>{
        settime((time)=>time+1)
      },1000)
  }
  function stoptimer(){
    clearInterval(timer.current)
    timer(0)
  }
   function resettimer(){
  settime(0)
   }
  return (
    <div>
        
        <h1>StopWatch :{time} Seconds</h1>
         
         <button onClick={Starttimer}>Start</button> <br /> <br />

         <button onClick={stoptimer}>Stop</button><br /> <br />
         <button onClick={resettimer}>Reset</button>
    </div>
  )
}

export default RefTwo
