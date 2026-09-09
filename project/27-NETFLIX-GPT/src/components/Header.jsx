import React from 'react'
import { signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { removeUser } from '../utils/userSlice'
import { auth } from '../utils/FireBase'
import { onAuthStateChanged } from "firebase/auth";
import {useEffect} from 'react'
import { LOGO } from '../utils/Constants';
const Header = () => {
  const navigate=useNavigate()
    const dispatch=useDispatch()
    const user=useSelector(store=>store.user)
    
      const handleSignOut=()=>{ 
         signOut(auth).
                then(() => {
                      // Sign-out successful.
                    //  dispatch(removeUser())
                   
  
                 }).catch((error) => {
                     // An error happened.
      })};

    useEffect(() => {
        const unsubscribe= onAuthStateChanged(auth, user => {
            if(user){
            const {uid,email,displayName,photoURL}=user
              dispatch(
                addUser({
                  uid:uid,
                  email:email,
                    displayName:displayName,
                    photoURL:photoURL
                  }))
                    navigate("/browse")
            }
            else{
              dispatch(removeUser(removeUser()))
                navigate("/")
            }
          });
          return ()=>unsubscribe();
      }, [])

  return (
    <div className="absolute w-screen px-8 py-5 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44 "
      src={LOGO} alt="logo" />
   
 {
  user&&(<div className="flex  ">
         {/* <img className='w-2' src={user.photoURL} alt="icon" /> */}
         <button className="bg-red-500 px-3  rounded font-bold text-white
         cursor-pointer" onClick={handleSignOut}>Sign Out</button>
     </div>)
 }
    </div>
  )
}


export default Header
