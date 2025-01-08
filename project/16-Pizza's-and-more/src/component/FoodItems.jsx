import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData'
import toast, { Toaster } from 'react-hot-toast';

const FoodItems = () => {
  const handleToast=(name)=>toast.success(`${name} added`)

  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>

    <div className='flex flex-wrap gap-10 mx-6 my-10 justify-center items-center lg:justify-start'>
      {
        FoodData.map((food)=>{
           return <FoodCard key={food.id} price={food.price} rating={food.rating} 
           description={food.desc} name={food.name} img={food.img} id={food.id} 
          handleToast={handleToast} />
        })
      }
      {/* <FoodCard /> */}
    </div></>
  )
}

export default FoodItems