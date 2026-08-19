
export const checkValidation = (email,password,name) => {
 const isemailValid= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
 const isPassWordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
 const isvalidName=/^[A-Za-z\s.'-]+$/.test(name)
  if(!isemailValid) return "Email is not valid"
  if(!isPassWordValid) return "Password is not valid"
  if(!isvalidName) return "name is not valid"

 return null 
}



