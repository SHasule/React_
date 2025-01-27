import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './component/AddTo'
import Todos from './component/Todos'
function App() {
  
  return (
    <div className='appDiv'>
      <h1>Learn about redux toolkit</h1>
     <AddTodo/>
      <Todos />
    </div>
  )
}

export default App
