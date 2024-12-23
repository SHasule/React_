import React, { useState } from 'react'
import "./form.css"

const Form = () => {

  const [name,setName]=useState()
  const [email,setemail]=useState()
  const [password,setpassword]=useState()
  const [confirmpassword,setconfirmpassword]=useState()
  const[isloggedin,setIsloggedin]=useState(true)


  function SignUpHandler(e){
    e.preventDefault()
    if (name&&email&&password&&confirmpassword) {
      
      if (password===confirmpassword) {
        alert(`${name} sign up successfully`)
      
      }
      else{
        alert("password not Matched")
      }
      
    }
  
  }

  function nameHandler(e){
   setName(e.target.value)

  }
  function loginHandler(e){
    e.preventDefault();
    if(name&&password&&email){
       alert("login suceessfully")
    }
    else{
      alert("enter required field")
    }
  }

  function memberhandelr(e){
 e.preventDefault();
 setIsloggedin(false)
  }
  function loginmember(e){
    e.preventDefault();
    setIsloggedin(true)
  }

  return (
   <div className='bg-slate-50 h-screen border rounded-md w-screen  flex justify-center gap-3 relative items-center'>

<div className='flex  bg-blue-200 border gap-3 absolute top-5 left-60 py-2 px-3'>
<button className={isloggedin ?" active border text-white rounded-md gap-1 " :""}   onClick={()=>setIsloggedin(true)} >Login</button>
<button className={!isloggedin ? "active border rounded-md  ":""} onClick={()=>setIsloggedin(false)}>signup</button>
</div>

     {
      isloggedin ? (
       <>
 
         <form onSubmit={loginHandler} 
         className='flex items-between justify-between flex-col h-[440px] border-[1px] border-black w-[400px] bg-slate-100  rounded-sm  '>

        <div className='py-1 px-2'>
         <label htmlFor="" className='text-[20px] '>name</label><br />
          <input type="text" placeholder='enter name'  className=' border border-black py-2 w-full outline-none bold rounded ' onChange={nameHandler}/>
          <p className={name ? "present":"notpresent"}>{name? "":"name is required"}</p>
         </div>
    
         <div className='py-1 px-2'>
         <label  htmlFor="" className='text-[20px]' >email</label><br />
          <input type="email" placeholder='enter email' className=' border border-black py-2 w-full outline-none bold rounded ' onChange={(e)=>setemail(e.target.value)} />
          <p className={name ? "present":"notpresent"}>{email? "":"email is required"}</p>
         </div>
    
         <div className='py-1 px-2'>
         <label htmlFor="" className='text-[20px]' >password</label><br />
          <input type="password"  placeholder='enter password'  className=' border border-black py-2 w-full outline-none bold rounded ' onChange={(e)=>setpassword(e.target.value)} />
          <p className={name ? "present":"notpresent"}>{password? "":"password is required"}</p>
         </div>
    
         <button className='py-1  px-2 bg-green-900  text-white bold text-xl hover:bg-green-500 '>Login</button>
<br />
         <div className='text-[20px] py-1 px-2  '>not a member ? <a href='' className='text-blue-600' onClick={memberhandelr}>sign up</a></div>
        </form>
       </>
        ):(
          
          <form onSubmit={SignUpHandler}
          className='flex items-between justify-between flex-col h-[520px] w-[400px] bg-slate-100 border-[1px] border-black rounded-sm  '>
          
<div className='py-1 px-2'>

<label htmlFor=""  className='text-[20px]'>name</label><br />
 <input type="text" className=' border border-black py-2 w-full outline-none bold rounded ' placeholder='enter name'  onChange={nameHandler}/>
 <p className={name ? "present":"notpresent"}>{name? "":"name is required"}</p>
</div>

<div className='py-1 px-2'>
<label htmlFor=""  className='text-[20px]'>email</label><br />
 <input className=' border border-black py-2 w-full outline-none bold rounded ' type="email" placeholder='enter email'  onChange={(e)=>setemail(e.target.value)} />
 <p className={name ? "present":"notpresent"}>{email? "":"email is required"}</p>
</div>

<div className='py-1 px-2'>
<label htmlFor=""  className='text-[20px]'>password</label><br />
 <input className=' border border-black py-2 w-full outline-none bold rounded ' type="password"  placeholder='enter password' onChange={(e)=>setpassword(e.target.value)} />
 <p className={name ? "present":"notpresent"}>{password? "":"password is required"}</p>
</div>

<div className='py-1 px-2'>
<label htmlFor=""  className='text-[20px]'>confirm password</label><br />
 <input className=' border border-black py-2 w-full outline-none bold rounded ' type="password"  placeholder='enter password'  onChange={(e)=>setconfirmpassword(e.target.value)}/>
 <p className={name ? "present":"notpresent"}>{confirmpassword? "":"confirm password is required"}</p>
</div>

<button className='py-1  px-2 bg-green-900  text-white bold text-xl hover:bg-green-500 '>Sign up</button>

<p className='text-[20px]'>already member ? <a href="" className='text-[20px] text-blue-600' onClick={loginmember}> login now</a></p>


</form>)
     }

    {/* <form onSubmit={SignUpHandler}>


     <div>
     <label htmlFor="">name</label><br />
      <input type="text" placeholder='enter name'  onChange={nameHandler}/>
      <p className={name ? "present":"notpresent"}>{name? "":"name is required"}</p>
     </div>

     <div>
     <label htmlFor="">email</label><br />
      <input type="email" placeholder='enter email'  onChange={(e)=>setemail(e.target.value)} />
      <p className={name ? "present":"notpresent"}>{email? "":"email is required"}</p>
     </div>

     <div>
     <label htmlFor="">password</label><br />
      <input type="password"  placeholder='enter password' onChange={(e)=>setpassword(e.target.value)} />
      <p className={name ? "present":"notpresent"}>{password? "":"password is required"}</p>
     </div>

     <div>
     <label htmlFor="">confirm password</label><br />
      <input type="password"  placeholder='enter password'  onChange={(e)=>setconfirmpassword(e.target.value)}/>
      <p className={name ? "present":"notpresent"}>{confirmpassword? "":"confirm password is required"}</p>
     </div>

  <button>Sign up</button>


    </form>


    <form onSubmit={loginHandler}>
    <div>
     <label htmlFor="">name</label><br />
      <input type="text" placeholder='enter name'  onChange={nameHandler}/>
      <p className={name ? "present":"notpresent"}>{name? "":"name is required"}</p>
     </div>

     <div>
     <label htmlFor="">email</label><br />
      <input type="email" placeholder='enter email'  onChange={(e)=>setemail(e.target.value)} />
      <p className={name ? "present":"notpresent"}>{email? "":"email is required"}</p>
     </div>

     <div>
     <label htmlFor="">password</label><br />
      <input type="password"  placeholder='enter password' onChange={(e)=>setpassword(e.target.value)} />
      <p className={name ? "present":"notpresent"}>{password? "":"password is required"}</p>
     </div>

     <button>Login</button>
    </form> */}

   </div>
  )
}

export default Form