import React,{memo} from 'react'

const UseCallbackOnE = ({loading,decrement}) => {
  console.log("UseCallbackOnE rendered");
  
  return (
    <div>
        <h3>{decrement}</h3>

    </div>
  )
}

export default  memo(UseCallbackOnE)
