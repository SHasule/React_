import React from 'react'
import Usercontext from './Usercontext'
import { useState } from 'react'

const UserContextProvider = ({children}) => {
  const [user,setUser]=useState(null)
  
  return (
    <Usercontext.Provider value={{user, setUser} }>
      {children}
    </Usercontext.Provider>
  )
}

export default UserContextProvider
