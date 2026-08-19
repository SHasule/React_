import React from 'react'
import { RESTO_IMG } from '../utils/constant';
import img from "../utils/food.png"
import {useDispatch } from "react-redux"
import { addItem } from '../utils/cartSlice';
import { removeItem } from '../utils/cartSlice';

const MenuItemList = ({item}) => {
    // console.log("item", item);
    const dispatch=useDispatch()

    const handleAddItem=(item)=>{
         dispatch(addItem(item))
    } 
   const handleRemoveItem=(item)=>{
    dispatch(removeItem(item.id))
   }
  return (
    <div className="border-b-taupe-300 border-b-4 p-5 ">
      <div className=" float-right">
          <button className="bg-black   px-1.5 py-1
           text-sm text-white rounded-xl" >
          <span className="p-1 m-1 font-bold text-2xl cursor-pointer" onClick={()=>handleRemoveItem(item)}>-</span>Add
          <span className=" cursor-pointer font-bold text-2xl p-1 m-1" onClick={()=>handleAddItem(item)}>+</span>
          </button>
         <img className="w-24" src={img} alt="" />
        
         {/* <img src={item.imageId} alt="" /> */}
      </div>
    <span className="pr-2 font-bold">{item.name}</span>
    <span>-₹{item.price/100||item.defaultPrice/100}</span>
    <p className="text-sm text-gray-700">{item.description}</p>
    </div>
  )
}

export default MenuItemList
