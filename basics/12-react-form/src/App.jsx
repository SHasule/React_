import React from 'react'
import './App.css'
import { useForm,  } from "react-hook-form"

const App = () => {

  const {
    register,
    handleSubmit, 
    watch,
    formState: { errors,isSubmitting },
  } = useForm()

 async function onsubmit(data){
   await new Promise((reslove)=> setTimeout(()=>{
    console.log("form submitting..", data)
   },4000)
     
   )

  
  }

  return (
    <form onSubmit={handleSubmit(onsubmit)} >
      <div>
        <label htmlFor="">first name: </label>
        <input type="text" {...register("firstname",{
          required:true,
          minLength:{value:3, message:"min 3"}
        })}  />
        {
          errors.firstname && 
          <p>{errors.firstname.message}</p>
        }
      </div>

      <div>
        <label htmlFor="">last name: </label>
        <input type="text" {...register("lastname",
          {
            required:true,
            minLength:{value:3, message:"min 3"},
            maxLength:{value:8,message:"max len 8"},
          })
        }/>

        {
          errors.lastname && 
          <p>{errors.lastname.message}</p>
        }

      </div>

      <input type="submit" 
      disabled={isSubmitting}
     value={ isSubmitting ? "submtting" :" submit" }
      />
    </form>
  )
}

export default App
