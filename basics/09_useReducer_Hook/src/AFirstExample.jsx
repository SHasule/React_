import React from 'react'
import { useReducer } from 'react'

const initialState=0;
  function reducer(state,action){
      switch(action){
        case "increment":
          return state+1;
        case "decrement":
        return state-1;

        default :
           return state  
      }
  }

const AFirstExample = () => {
 const[count,dispatch]=useReducer(reducer,initialState)


  return (
    <div>
              
              <h1>count is : {count}</h1>

      <button onClick={()=>dispatch("increment")}>increment</button>
      <button onClick={()=>dispatch("decrement")}>decrement</button>
    </div>
  )
}

export default AFirstExample
