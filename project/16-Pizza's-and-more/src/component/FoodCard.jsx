import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice/CartSlice';
import { toast } from 'react-toastify';

const FoodCard = ({id,description,price,name,img,rating,handleToast}) => {
  const dispatch=useDispatch()
  return (
    <div className='font-bold w-[250px] bg-white p-5 rounded-lg flex flex-col gap-2 '>
       
        <img src={img} alt=""
        className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' />
        <div className= 'text-sm flex justify-between'>
          <h2>{name}</h2>
          <span className='text-green-500'>₹{price}</span>
          </div>

          <p className='text-sm font-normal' >{description.slice(0,50)}...</p>
          
          <div className='flex justify-between'>
            <span className='flex justify-center items-center '><FaStar className='mr-1 text-yellow-400' />{rating}</span>
            <button className='p-1 text-white bg-green-500 hover:bg-green-600
             rounded-lg text-sm'

           onClick={
            ()=>{dispatch(addToCart({id,price,name,rating,qty:1,img}))
            handleToast(name)  }}
           >Add to cart</button>
          </div>
        
    </div>
  )
}

export default FoodCard