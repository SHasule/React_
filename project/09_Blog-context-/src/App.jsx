import { useState } from 'react'
import Paginatition from './components/Paginatition'
import Blog from './components/Blog'
import Header from './components/Header'
import './App.css'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from './context/Appcontext'
import { Routes ,Route, useSearchParams, useLocation} from 'react-router-dom'
import Home from './Pages/Home'
import Blogpage from './Pages/Blogpage'
import Tagpage from './Pages/Tagpage'
import Categorypage from './Pages/Categorypage'

function App() {
 const [searchParams,setSearchParams]=useSearchParams();
 const loction=useLocation()
   useEffect(()=>{
       
     const page=searchParams.get("page") ?? 1;

      if(location.pathname.includes("tags")){
        const tag=loction.pathname.split("/").at(-1).replaceAll("-","");
        fetchBlogPost(Number(page),tag)
      }
      else if(loction.pathname.includes("categories")){
        const category=loction.pathname.split("/").at(-1).replaceAll("-","");
        fetchBlogPost(Number(page),null,category)

      }
      else{
        fetchBlogPost(Number(page))
      }

   },[loction.pathname,location.search])

      
  return (
     <Routes>
     <Route  path='/' element={<Home/>}/>
     <Route  path='/blog/:blogId' element={<Blogpage/>}/>
     <Route  path='/tags/:tag' element={<Tagpage/>}/>
     <Route  path='/categories/:category' element={<Categorypage/>}/>
     </Routes>
  )
}

export default App
