import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Conatctus = () => {
  const naviagte=useNavigate()
  function gobackHandler(){
 naviagte(-1)
  }
  return (
  <div>
      <div>Contact page </div>

      <button onClick={gobackHandler}>go Back</button>
  </div>
  )
}
