import {React,useState} from 'react'
import Home from './page/Home'
import Navbar from './component/Navbar'
import Login from './page/Login'
import SignUP from './page/SignUP'
import Dashboard from './page/Dashboard'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  const [isloggedin, setIsLoggedin] = useState(false)
  return (
    <div>
      <Navbar isloggedin={isloggedin} setIsLoggedin={setIsLoggedin}  />
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUP/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

      </Routes>

    </div>
  )
}

export default App
