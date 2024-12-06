import { useState } from 'react'
import Paginatition from './components/Paginatition'
import Blog from './components/Blog'
import Header from './components/Header'

import './App.css'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from './context/Appcontext'

function App() {
 
  const {fetchBlogPost}=useContext(AppContext)
   useEffect(()=>{
    fetchBlogPost()
   },[])

      
  return (
   <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>    
         <Header />
         <Blog />
         <Paginatition />
   </div>
  )
}

export default App
