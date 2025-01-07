import React from 'react'
import FirstChild from './childs/FirstChild'
import { createContext } from 'react'
import { useState } from 'react'
import "./App.css"

  const ThemeContext=createContext()

const App = () => {
        const [theme,setTheme]=useState("light")     

  return (
    <div>
          <ThemeContext.Provider value={{theme,setTheme}}  >
            <div id='apps'   style={{backgroundColor:theme==="light"?"black":"red"}}>
            <FirstChild />
            </div>
         
            </ThemeContext.Provider>
    </div>
  )
}

export default App
export {ThemeContext}
