import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import frameImage from "../assets/frame.png"
const Template = ({title,desc1,desc2,image,formtype,setIsloggedin}) => {
  return (
    <div>

      <div>
      <h1>{title}</h1>
      <p>
        <span>{desc1}</span>
        <span>{desc2}</span>
      </p>

      {
        formtype==="signup"?
        (<SignupForm setIsloggedin={setIsloggedin}/>):
        (<LoginForm setIsloggedin={setIsloggedin} />)
      }


      <div>
        <p>OR</p>
        <div></div>
      </div>

      <button>
        Sign up With Google
      </button>
      </div>


      <div>
        <img src={frameImage} alt="pattern" 
        width={530}
        height={490}
        loading='lazy'/>

        <img src={image} alt="students"
        width={530}
        height={490}
        loading='lazy'/>
      </div>
    </div>
  )
}

export default Template