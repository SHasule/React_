
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Cart from './pages/Cart'
import Home from './pages/Home'

function App() {
 return(
  <div>
 <div>
  <Navbar />
 </div>

 <Routes>
  <Route  path='/'element={<Home/>}/>
  <Route path='/cart' element={<Cart/>}/>
 </Routes>
  
  </div>
 )
  
}

export default App
