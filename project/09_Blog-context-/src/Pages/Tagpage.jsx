import React from 'react'
import Paginatition from '../components/Paginatition'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blog from '../components/Blog'

const Tagpage = () => {
 const navigation=useNavigate()
 const location=useLocation()
  const tag=location.pathname.split("/").at(-1)
  return (
  
    <div>
      <Header></Header>

      <div>
        <button onClick={()=>navigation(-1)} >Back</button>
        <h2>
          Blogs Tagged
           <span>#${tag}</span></h2>
      </div>
      
      <Blog></Blog>
      <Paginatition></Paginatition>
    </div>
  )
}

export default Tagpage
