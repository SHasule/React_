import { useState } from "react"

 function Child(props){
 const[Name,setName]=useState()
 function handleSubmit(e){
 e.preventDefault();
  props.getdata(Name)
 }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="enter name" value={Name} onChange={(e)=>{setName(e.target.value)}} />
    <button>submit</button>
    </form>
  )
 }
 export default Child()