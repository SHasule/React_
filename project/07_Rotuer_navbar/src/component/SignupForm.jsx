import React from 'react'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const SignupForm = () => {
  const [FormData,setFormData]=useState({
    firstname:"", lastname:"",email:"", password:"",confirmPassword:""
  })
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
    <div>

      {/* student instructor */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form >

        <div>

        <label>
          <p>First name <sup>*</sup> </p>
          <input required type="text"
          name='firstname' value={FormData.firstname}
          placeholder='Enter first name' 
          onChange={changeHandler}           />
        </label>

        <label>
          <p>last name <sup>*</sup> </p>
          <input required type="text"
          name='lastname' value={FormData.lastname}
          placeholder='Enter last name' 
          onChange={changeHandler}           />
        </label>

        </div>

{/* email */}
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


         {/* password */}
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

               
          </label>

          <label >
             <p>
              confirm password <sub>*</sub>
              </p>
              <input required type={setshowPassword?("text"):("password")} 
              name='confirmPassword' value={FormData.confirmPassword}
              onChange={changeHandler}
              placeholder='confirm Password '
                />

               <span onClick={()=>setshowPassword((prev)=>!prev)}>
               {showPassword?(<IoEyeOff />):(<IoEye />)}
               </span>

               
          </label>

          <button>
            Create Account
          </button>

      </form>
    </div>
  )
}

export default SignupForm