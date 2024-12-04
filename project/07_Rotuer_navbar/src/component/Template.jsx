import React from 'react'
import LoginForm from './LoginForm'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
const Template = ({title,desc1,desc2,image,formtype,setIsLoggedin}) => {
  return (
    <div>
      
       <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {formtype==="signup"?
        (<SignupForm/>):
      (<LoginForm/>)}

      <div>
        <div></div>
        <p>OR</p>
        <div></div>
      </div>

      <button>
        <p>SigN Up with Google</p>
      </button>

   </div>

     <div>
        <img src={frameImage} alt="pattern"
        width={540} 
        height={495}
        loading='lazy' />

        <img src={image} alt="pattern"
        width={540} 
        height={480}
        loading='lazy' />
     </div>


    </div>
  )
}

export default Template