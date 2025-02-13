import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from '../redux/Slices/counterSlice';

const Counter = () => {

  const value=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()

  return (
    <div>

      <button
      onClick={()=>dispatch(increment())}>increment</button>
      <div>{value}</div>
      <button 
      onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Counter