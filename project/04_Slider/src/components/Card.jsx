import React from 'react'
import { FaQuoteLeft , FaQuoteRight} from "react-icons/fa6";



export const Card = (props) => {
  let review=props.review
  return (
    <div className='flex flex-col md:relative'>

       <div className='absolute top-[-7rem] z-[10] mt-auto ' >
        <img src={review.image} alt="" 
        className='aspect-square rounded-full w-[140px] h-[140px] z-[23]'/>
     
     <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] left-[10px] z-[-10]'></div>
       </div>

       <div className='text-center mt-7'>
        <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
        <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
       </div>

       {/* <div className='text-center mt-7'>
        <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
       </div> */}

       <div className='text-violet-400 mx-auto mt-5 '>
       <FaQuoteLeft />
       </div>
     
     <div  className='text-center mt-4 text-slate-500'>
      {review.text}
     </div>

     <div className='text-violet-400 mx-auto mt-5 '>
     <FaQuoteRight />
     </div>
       
      
    </div>
  )
}
