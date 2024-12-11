import React from 'react'

import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Blog from '../components/Blog'
import Paginatition from '../components/Paginatition'
const Categorypage = () => {
  const navigation=useNavigate()
 const location=useLocation()
  const category=location.pathname.split("/").at(-1)
  return (
    <div>
     <Header/>
         <div>
          <button onClick={()=>navigation(-1)}>Back</button>
        
        <h2>Blog on <span>{category}</span></h2>
        </div>
        <Blog />
        <Paginatition/>
    </div>
  )
}

export default Categorypage