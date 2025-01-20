import React from 'react'
import { useRef } from 'react'

const Uncontrolled = () => {
 const refobject= useRef()
 
  function handlesubmit(e){
    e.preventDefault()
      console.log(refobject.current.value);
  }
  return (
    
    <form>
      <label htmlFor="">name is: </label>
       <input type="text"  ref={refobject} />
       <button onClick={handlesubmit}>submit</button>
    </form>
    
  )
}

export default Uncontrolled
