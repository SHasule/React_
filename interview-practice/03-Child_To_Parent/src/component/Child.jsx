import React from 'react'


const Child = (props) => {
  let name={name:"suraj", email:"s@gmail.com"}
  return (
    <div>
      <p>name is: {name.name} </p>
      <button onClick={()=>props.data(name)} >click me</button>

    </div>
  )
}

export default Child
