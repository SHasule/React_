import { useState } from 'react'

import './App.css'

function App() {
  const [formData, setFormData] = useState( {firstname:"" , lastname:"", email:"",country:"india", 
    streetAddress:"", city:"", state:"",zipcode:"",comments:false,offer:false,
    candidates:false,wantedNotification:""

  } )

  

  function changehandler(e){
    const{name,type,value,checked}=e.target
  setFormData(previousData=>{
    return{
         ...previousData,
         [name]:type==="checkbox"?checked:value
    }
  })
  }
  function submithandle(e){
    e.preventDefault();
    console.log("printing form data");
    
    console.log(formData);
    
  }

  return (
   <div className='flex flex-col items-center '>
     <form onSubmit={submithandle}>
       
       <label htmlFor="firstname">first name</label>
       <br />
       <input type="text" placeholder='suraj' id='firstname'
        name='firstname' value={formData.firstname}
       onChange={changehandler} />

       <br />
       <label htmlFor="lastname">last name</label>
       <br />
       <input type="text" placeholder='hasule' id='lastname'
        name='lastname' value={formData.lastname}
       onChange={changehandler} />

<br />
       <label htmlFor="email">email</label>
       <br />
       <input type="email" placeholder='suraj@email.com' id='email'
        name='email' value={formData.email}
       onChange={changehandler} />

 <br />
   <label htmlFor="country">select your country</label>
   <br />
       <select name="country" id="country"  onChange={changehandler} value={formData.country}>
        <br />
        <option value="india">india</option>
        <option value="japan">japan</option>
        <option value="US">US</option>
        <option value="UK">UK</option>

       </select>

<br />
       <label htmlFor="streetAddress">street Address</label>
       <br />
       <input type="text" placeholder='xyz road ' id='streetAddress'
        name='streetAddress' value={formData.streetAddress}
       onChange={changehandler} />

<br />
       <label htmlFor="city">city</label>
       <br />
       <input type="text" placeholder='xyz road ' id='city'
        name='city' value={formData.city}
       onChange={changehandler} />
        

        <br />
       <label htmlFor="state">State</label>
       <br />
       <input type="text" placeholder='panjab' id='state'
        name='state' value={formData.state}
       onChange={changehandler} />

<br />
       <label htmlFor="zipcode">Zip postal code</label>
       <br />
       <input type="number" placeholder='987989 ' id='zipcode'
        name='zipcode' value={formData.zipcode}
       onChange={changehandler} />
<br />
<br />


         <fieldset>
          <legend>By Email</legend>

          <div className='flex'>
          <input type="checkbox" id='comments' name='comments'  onChange={changehandler}
          checked={formData.comments} />
          <div>
          <label htmlFor="comments">Comments</label>
          <p>Lorem ipsum dolor sit amet.</p>
          <br />
          </div>
          </div>
        

          <div className='flex'>
          <input type="checkbox" id='offer' name='offer'  onChange={changehandler}
          checked={formData.offer} />
          <div>
          <label htmlFor="offer">offer</label>
          <p>Lorem ipsum dolor sit amet.</p>
          <br />
          </div>
          </div>

          <div className='flex'>
          <input type="checkbox" id='candidates' name='candidates'  onChange={changehandler}
          checked={formData.candidates} />
          <div>
          <label htmlFor="candidates">candidates</label>
          <p>Lorem ipsum dolor sit amet.</p>
          <br />
          </div>
          </div>
         </fieldset>


  <fieldset>
    <legend>Push Notification</legend>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>

    <input type="radio" name='wantedNotification' id='pushEveryThing' value="everything" onChange={changehandler} />
    <label htmlFor="pushEveryThing">everything</label>
<br />
    <input type="radio" name='wantedNotification' id='pushemail' value="same as email" onChange={changehandler} />
    <label htmlFor="pushemail">same as email</label>
<br />
    <input type="radio" name='wantedNotification' id='nomore' value="no more notification" onChange={changehandler} />
    <label htmlFor="nomore">no more notification</label>
    
  </fieldset>
<br />
<button className='bg-blue-500 text-white py-2 px-8 rounded-sm font-bold hover:bg-blue-600'>Save</button>








     </form>
   </div>
  )
}

export default App
