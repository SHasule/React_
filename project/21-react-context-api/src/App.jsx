import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import "./App.css"

const App = () => {
  return (

    <UserContextProvider>
       <Login/>
  
       <Profile/>
    </UserContextProvider>
  )
}

export default App
