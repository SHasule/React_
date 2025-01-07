import React from 'react'
import { useContext } from 'react'
import { Makingcontext } from '../App'

const SecnodChild = () => {
  let navigator=useContext(Makingcontext)
  return (
    <div>
      <h2>data: {navigator.name}</h2>
    </div>
  )
}

export default SecnodChild
