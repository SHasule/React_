import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify'
import { add } from "../redux/slices/CartSlice";
import { remove } from "../redux/slices/CartSlice";
const Product = ({ post }) => {
    
  const {cart}=useSelector((state)=>state)

 const dispatch=useDispatch()

 const AddtoCart=()=>{
    dispatch(add(post));
    toast.success("item added")
    
 }

 const removeFromCart=()=>{
    dispatch(remove(post.id));
    toast.error("item removed")
    
 }
   

  return (
    <div className="flex  flex-col items-center justify-between 
    hover:scale-105 transition duration-300 ease-in 
    gap-3 mt-10 ml-5 p-4 rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>

      <div>
        <p className="w-40 text-gray-400 font-normal text-[13px] text-left">{post.description.split(" ").slice(0,10).join(" ")+ "..."}</p>
      </div>

      <div  className="h-[180px]">
        <img src={post.image} alt="" className="h-full w-full" />
      </div>

     <div className="flex gap-10 justify-between">
     <div className="items-center justify-center w-full mt-5">
        <p className="text-green-600  font-semibold" >${post.price}</p>
      </div>

     <div>
     {
        cart.some((p)=>p.id == post.id) ?
        (
          <button
           className="text-gray-700 border-2 border-gray-700 rounded-full  py-1 font-semibold px-5 uppercase text-[12px]
           hover:text-white hover:bg-gray-700  transition duration-300 ease-in "
          onClick={removeFromCart} >Remove Item</button>
        ):(
          <button
           className="text-gray-700 border-2 border-gray-700 rounded-full  py-1 font-semibold px-5 uppercase text-[12px]
           hover:text-white hover:bg-gray-700  transition duration-300 ease-in "
          onClick={AddtoCart} >AddTocart</button>
        )
      }
     </div>
     </div>
    </div>
  );
};

export default Product;
