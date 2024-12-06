import React from 'react'
import loginImg from "../assets/login.png"
import Template from '../component/Template'

const Login = ({setIsloggedin}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype="login"
      setIsloggedin={setIsloggedin}
    />
  )
}

export default Login
