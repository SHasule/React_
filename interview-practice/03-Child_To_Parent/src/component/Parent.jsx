import React from 'react'
import Child from './Child'
const Parent = () => {

    function alertParent(name){
      alert(name.name)   
    }

  return (
    <div>
      
       <Child data={alertParent} />
    </div>
  )
}

export default Parent