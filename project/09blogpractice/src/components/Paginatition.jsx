import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/Appcontext'

const Paginantion = () => {

  const {totalPages,HandlePageChange,page}=useContext(AppContext)
  return (
    <div>
        
       { page>1&&
         (<button onClick={()=>HandlePageChange(page+1)}>
          next page
         </button>)
         }
  <br />
         { 
           page <totalPages&&

          <button  onClick={()=>HandlePageChange(page+1)}>
            previous page
          </button>
         }
    </div>
  )
}

export default Paginantion