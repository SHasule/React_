import {React, useState} from 'react'
import './FormData.css'

const FormData = () => {
  const [formData,setFormData]=useState( {FirstName:"",lastNAME:"",email:"",country:"",city:"",
    state:"",zipcode:"",firstTick:true,secTick:true,thirdTick:true,mode1:"",mode2:"",mode3:""
  })


 
  
  function handleChange(event){
    const{name,type,checked,value}=event.target;
 setFormData(previosuData=>{
  return{
    ...previosuData,
    // [event.target.name]:event.target.value
    [name]:type=== "checkbox"? checked : value
  }
 })
  
  }

  function submithandler(e){
    e.preventDefault();
    console.log("printing data....");
    console.log(formData);
    
    
  }

  return (
    <div>
    <form className='flex flex-col justify-center items-center ' onSubmit={submithandler}>
     <div>
      <label htmlFor="FirstName" >First name</label>
      <br />
      <input type="text" id='FirstName' placeholder='Suraj' onChange={handleChange} name='FirstName' value={formData.FirstName}/>

      <br />
      <label htmlFor="lastNAME">last name</label>
      <br />
      <input type="text" id='lastNAME' placeholder='Last name' onChange={handleChange} name='lastNAME' value={formData.lastNAME}/>

      <br />
      <label htmlFor="email">email</label>
      <br />
      <input type="text" id='email' placeholder='xyz@gmail.com' onChange={handleChange} name='email' value={formData.email}/>

<br />
  <label htmlFor="country">Select Your country</label>
  <br />
      <select id='country' className='border' onChange={handleChange} name='country' value={formData.country}> 
        <option value="India">India</option>
        <option value="US">US</option>
        <option value="Japan">Japan</option>
      </select>

      <br />
      <label htmlFor="city">city</label>
      <br />
      <input type="text" id='city' placeholder='pune' onChange={handleChange} name='city' value={formData.city} />

      <br />
      <label htmlFor="state">State</label>
      <br />
      <input type="text" id='state' placeholder='maharastra' onChange={handleChange} name='state' value={formData.state}/>

      <br />
      <label htmlFor="zipcode">Zip/Postal code</label>
      <br />
      <input type="text" id='zipcode' placeholder='717171' onChange={handleChange} name='zipcode' value={formData.zipcode}/>

     </div>

<br /> <br />

    <div>
<label>By Email</label>
  <br />
 <input type="checkbox" id='comments' onChange={handleChange} name='firstTick'
 checked={formData.firstTick}/>
 <label htmlFor="comments">Comments</label>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

 <br />
 <input type="checkbox" id='candidates' onChange={handleChange} name='secTick'
  checked={formData.secTick}/>
 <label htmlFor="candidates">Candidates</label>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

 <br />
 <input type="checkbox" id='offer' onChange={handleChange} name='thirdTick'
  checked={formData.thirdTick}/>
 <label htmlFor="offer">Offer</label>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

    </div>
     
     <br />
     <div>
     <h4>Push notification</h4>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

     <br />
     <input type="radio" id='notifi' name='mode1' onChange={handleChange}  checked={formData.mode1="notification"} value="notification"/>
     <label htmlFor="notifi">no Push notification</label>

     <br />
   <input type="radio" name="mode2" id="everything" value="everything" onChange={handleChange} checked={formData.mode2=="everything"} />
   <label htmlFor="everything">everything</label>


     <br />
     <input type="radio" id='sameAsEmail' name='mode3' onChange={handleChange} checked={formData.mode3="sameAsEmail"} value="sameAsEmail"/>
     <label htmlFor="sameAsEmail">same As Email</label>

     </div>


 <br /><br />
 <button className='bg-blue-500 text-white py-3 px-8'>Save data</button>
    </form>

    </div>
  )
}

export default FormData
