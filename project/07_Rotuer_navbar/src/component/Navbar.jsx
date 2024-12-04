import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import { toast } from 'react-toastify'
const Navbar = (props) => {
  let isloggedin=props.isloggedin
  let setIsLoggedin=props.setIsLoggedin;
  return (
    <div className='flex justify-evenly'>
   <Link>
   <img src={logo} alt="logoImg" width={149} loading='lazy' height={29} />
   </Link>
  
  <nav>
    <ul className='flex gap-3'>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
    </ul>
  </nav>


{/* login signup dashboard logout */}
  <div className='flex gap-3'>
    
    {!isloggedin&&
      <Link to="/login" >
        <button>Log in</button>
      </Link>
    }

    {!isloggedin&&
      <Link to="/signup" >
        <button >sign up</button>
      </Link>
    }

    {isloggedin&&
      <Link to="/" >
        <button onClick={()=>{
          setIsLoggedin(false)
          toast.success("Logged out")
        }} >Log Out</button>
      </Link>
    }

    {isloggedin&&
      <Link to="/dashboard" >
        <button>dashboard</button>
      </Link>
    }
</div>  
 
    </div>
  )
}

export default Navbar