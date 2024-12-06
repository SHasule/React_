import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
const Navbar = (props) => {
  const isloggedin=props.isloggedin;
  const setIsloggedin=props.setIsloggedin;
  return (
    <div  className='flex justify-evenly'>

      <Link to="/">
      <img src={logo} width={145} height={27} loading='lazy ' alt="logo img" />
      </Link>

      <nav>
        <ul className='flex gap-4'>
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


        {/* buttons  */}

      </nav>
    
      <div className='flex gap-5'>
        
       {!isloggedin&&
          <Link to="/login">
            <button >Login</button>
          </Link>
        }

        {!isloggedin&&
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
        }

        {isloggedin&&
          <Link to="/">
            <button onClick={
            ()=>{
              setIsloggedin(false)
              toast.success("logged out")
            }}>Log out</button>
          </Link>
        }

        {isloggedin&&
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        }

       </div>
    
    
    </div>
  )
}

export default Navbar