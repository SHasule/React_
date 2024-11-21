 
import { useState } from "react";

 function ProductForm(){
  const[newtitle,setTitle]=useState("")
  const[newdate,setDate]=useState("")

function titlehandler(e){
 setTitle(e.target.value);
 
}
function handledate(e){
setDate(e.target.value);
}

function handleForm(e){
  e.preventDefault()
 let changevalue={
   title:newtitle,
   date:newdate,
 }
 console.log(changevalue);
 setDate('')
 setTitle('')
}

  return(
    <form onSubmit={handleForm}>
      <div>
        <label>Title</label>
        <input value={newtitle} onChange={titlehandler} type="text" />
      </div>

      <div>
        <input value={newdate} onChange={handledate}  type="date" min="2023-01-01" max="2023-12-12" />
      </div>
      <div>
        <button  type="submit">add note</button>
      </div>
    </form>
  )
 }
 export default ProductForm