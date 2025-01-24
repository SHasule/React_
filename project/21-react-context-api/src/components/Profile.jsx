import React from 'react'
import { useContext } from 'react'
import Usercontext from '../context/Usercontext'

const Profile = () => {
  const {user}=useContext(Usercontext)
  
   if(!user) return <h3>Login plz</h3>

   return <h3> username is : {user.userName}</h3>
}

export default Profile
