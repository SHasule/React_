import { useState } from 'react'
import { useRef } from 'react'
import './App.css'

function RefONE() {
  const [text, setText] = useState("")

  const refElement=useRef("")
  console.log(refElement);
  
 
  function resetHandler(){
    setText("")
  }

   function handleinput(e){
    setText(e.target.value)
    console.log(e.target.value);
    
   }
   
    function changecolor(){
      console.log("color chnaged");
      refElement.current.style.color="red"
      refElement.current.value="kk"
      
    }


  return (
   <div>

     <input ref={refElement} type="text"  name='text' value={text}
     onChange={handleinput}
      />

      <button onClick={resetHandler}>reset</button>

      <p>name is {text}</p>
      <button onClick={changecolor}>change color</button>

   </div>
  )
}

export default RefONE
