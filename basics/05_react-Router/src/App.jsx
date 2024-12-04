import { useState } from 'react'
import {Routes,Route, NavLink} from "react-router-dom"
import './App.css'
import Home from './component/Home'
import Support from './component/Support'
import NotFound from './component/NotFound'
import About from './component/About'
import { Link } from 'react-router-dom'
import { MainHeader } from './component/MainHeader'
import { Conatctus } from './component/Conatctus'

function App() {
  

  return (
    <div>
    
     <nav>
      <ul>
        <li>
          <NavLink to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" >about</NavLink>
        </li>
        <li>
          <NavLink to="/support" >support</NavLink>
        </li>
        {/* <li>
          <NavLink to="/*" >NotFound</NavLink>
        </li> */}

        <li>
          <NavLink to="/contact">Contact us</NavLink>
        </li>
      </ul>
     </nav>




  <Routes>
    <Route  path='/' element={<MainHeader/>}>
 
 {/* Default route */}
    <Route index element={<Home/>}/> 

    <Route path='/about' element={<About/>}/>
    <Route path='/support' element={<Support/>}/>
    <Route path='/*' element={<NotFound/>}/>
    <Route path='/contact' element={<Conatctus/>}/>

    </Route>
    </Routes>
     
    </div>
  )
}

export default App
