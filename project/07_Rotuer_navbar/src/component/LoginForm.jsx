import {React,useState} from 'react'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
const LoginForm = () => {
  const [FormData,setFormData]=useState({email:"",password:""})
  const [showPassword,setshowPassword] =useState(false)

  function changeHandler(event){
   setFormData((previousData)=>{
    return{
      ...previousData,
      [event.target.value]:event.target.value
    }
   })
  }
  return (
    <form>
          <label >
             <p>
              Enter Email  <sub>*</sub>
              </p>
              <input required type="email" 
              name='email' value={FormData.email}
              onChange={changeHandler}
              placeholder='Enter email'
                />
          </label>


          <label >
             <p>
              Enter password <sub>*</sub>
              </p>
              <input required type={setshowPassword?("text"):("password")} 
              name='password' value={FormData.password}
              onChange={changeHandler}
              placeholder='Enter password'
                />

               <span onClick={()=>setshowPassword((prev)=>!prev)}>
               {showPassword?(<IoEyeOff />):(<IoEye />)}
               </span>

               <Link to="#" >
               <p>forget password</p>
               </Link>
          </label>

          <button>
            Sign up
          </button>
    </form>
  )
}

export default LoginForm