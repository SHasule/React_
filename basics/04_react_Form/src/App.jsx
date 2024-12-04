import { useState } from 'react'
import './App.css'

function App() {

// const [first,setFirst]=useState("")
// const [last,setlast]=useState("")

// console.log(first);
// console.log(last);

//    function firsthandler(event){
//    setFirst(event.target.value)
//    }
//    function lasthandler(event){
//     setlast(event.target.value)
//    }
  

 const [formData,setFormData]=useState( {firstname:"", lastname:"", email:"",
  comment:"", isvisible:true, mode:"",favCar:""})

//  console.log(formData);
 
 function changehandler(event){
      
  const{name,type,checked,value}=event.target;
         setFormData(previousData=>{
          return{
            ...previousData,
          // [event.target.name]:event.target.value
            [name]:type=== "checkbox"? checked : value
          }
         })
 }

 function submithandler(e){
  e.preventDefault();
  console.log("printing form data.....");
  console.log(formData);
  
  
 }

  return (
    <>
     <div>
       
       <form onSubmit={submithandler}>
        <input onChange={changehandler} type="text" name='firstname' placeholder='first name' value={formData.firstname}/>

        <br /><br /><br />

        <input onChange={changehandler} type="text" name='lastname' placeholder='lastname' value={formData.lastname} />

        <br /><br /><br />

         <input onChange={changehandler} type="email" name='email' placeholder='enter email' value={formData.email} />
           
         <br /><br /><br />

         <textarea onChange={changehandler} placeholder='add comments' name='comment' value={formData.comment}></textarea>
        
         <br /><br /><br />
         <input type="checkbox" onChange={changehandler} name='isvisible' id='isvisible' checked={formData.isvisible} />
         <label htmlFor='isvisible' >Am i visible?</label>
      
         <br /><br /><br />

         <fieldset>
          <legend>MODE:</legend>
          <input type="radio" value="online-mode" name='mode' id='online-mode' onChange={changehandler}
         checked={formData.mode=="online-mode"}  />
         <label htmlFor="online-mode">online mode</label>

         <input type="radio" value="offline-mode" name='mode' onChange={changehandler} 
         checked={formData.mode=="offline-mode"}/>
         <label htmlFor="offline-mode">offline mode</label>
         </fieldset>
          


          <select name='favCar' value={formData.favCar} onChange={changehandler}>    
            <option>select your car</option>
            <option value="tharr">tharr</option>
            <option value="bugati">bugati</option>
            <option value="swift">swift</option>
            <option value="kia">kia</option>
          </select>

 <br /><br /><br />
 <button>Submit</button>
       </form>
     </div>
    </>
  )
}

export default App
