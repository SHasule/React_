import React, { useState } from 'react'

const App = () => {

  const [activity,setActivity]=useState("")
  const [listTodo,setlistTodo]=useState([])


  function addItem(e){
    e.preventDefault()
    setlistTodo([...listTodo,activity])
    setActivity("")
  }
  function removeTodo(i){
         const updatedList=listTodo.filter((elem,index)=>{
          return i!=index
         })
         setlistTodo(updatedList)
  }
  function removeAll(){
    setlistTodo("")
  }

  return (
    <div>
       
       <input type="text" placeholder='add item' value={activity} 
       onChange={(e)=>setActivity(e.target.value)}
       />
       <button onClick={addItem}>add</button>

       <ul> 
        {
          listTodo !=[] &&
          listTodo.map((val,i)=>{
            return(
              <div key={i}>
                <p>{val}</p>
                <button onClick={()=>removeTodo(i)}>remove</button>
              </div>
            )
          }) 
        }

       </ul>

        {
          listTodo.length >=1 ? (
            <button onClick={removeAll}>remove All</button>
          ):(<></>)
        }
    </div>
  )
}

export default App
