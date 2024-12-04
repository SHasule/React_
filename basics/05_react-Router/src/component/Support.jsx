import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {

 const navigate= useNavigate()
  function contactHandler(){
navigate("/contact")
  }

  function gobackHandler(){
    navigate(-1)
  }

  return (
    <div>
      <div>
      Support page
    </div>

    <button onClick={contactHandler}>Go to Contact page</button>
  
  
    <button onClick={gobackHandler}>go Back</button>
    
    </div>
  )
}

export default Support
