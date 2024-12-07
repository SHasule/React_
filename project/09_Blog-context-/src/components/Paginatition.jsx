import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/Appcontext'

const Paginatition = () => {

  const {page,totalPages,HandlePageChange}=useContext(AppContext)
  return (

    <div className='flex border-2 w-full bg-white fixed  bottom-0 justify-evenly items-center  py-2 shadow-lg '>
       
       <div className='flex gap-3 '>
        
       { page>1 &&
        (
           <button  
            className='rounded-md border hover:bg-slate-200 py-1 px-3'
         onClick={()=>HandlePageChange(page-1)}
         >Previous</button>
        )
        }

       { 
         page<totalPages&&
        (
        <button
        className='rounded-md border hover:bg-slate-200 py-1 px-3'
         onClick={()=>HandlePageChange(page+1)}
        >Next</button>
      )
        }

       </div>

       <p > Page <span className='font-bold text-md'>{page}</span> of <span className='font-bold text-md'>{totalPages}</span>  </p>
    </div>
  )
}

export default Paginatition