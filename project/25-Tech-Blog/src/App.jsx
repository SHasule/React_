import React from 'react'
import "./App.css"
const App = () => {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  
  return (
    <div>with appwrite</div>
  )
}

export default App