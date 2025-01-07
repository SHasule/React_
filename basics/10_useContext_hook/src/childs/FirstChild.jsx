import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'

const FirstChild = () => {
  const {theme,setTheme}=useContext(ThemeContext)
   
   function ChangeColor(){
        if(theme==="light"){
          setTheme("dark")
        }
        else{
          setTheme("light")
        }
   }

  return (
    <div>
       <button onClick={ChangeColor}>Change Color</button>
    </div>
  )
}

export default FirstChild
