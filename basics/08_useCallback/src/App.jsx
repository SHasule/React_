import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppMain from './AppMain'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <AppMain />
  </div>
  )
}

export default App
