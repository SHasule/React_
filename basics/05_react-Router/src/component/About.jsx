import React from 'react'
import { useNavigate } from 'react-router-dom'


function About() {
  const navigate=useNavigate()
  function SupportHandler(){
  navigate("/support")
  }

function goback(){
  navigate(-1)
}

  return (
    <div>
      <div>About page</div>

      <button onClick={SupportHandler}>Go To Support page</button>

      <button onClick={goback}>go back</button>
    </div>
  )
}

export default About