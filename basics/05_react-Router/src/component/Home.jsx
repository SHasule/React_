import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
 const  navigate=useNavigate()
  function nextpage(){
    navigate("/about")
  }


  return (
    
     <div>
      <div>this is home page</div>

      <button onClick={nextpage}>next page</button>
     </div>
  )
}

export default Home
