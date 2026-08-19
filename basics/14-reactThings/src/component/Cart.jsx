import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import MenuItemList from './MenuItemList';
import { clearCart } from '../utils/cartSlice';
const Cart = () => {
    const CartData=useSelector((store)=>store.cart.item)
    console.log("cart", CartData);
    
    const dispatch=useDispatch()
    const handleClearCart=()=>{
       dispatch(clearCart())
    }
   
     const totalPrice = CartData.reduce(
        (total, item) => total + (item.price || item.defaultPrice),
        0
    );
      
   
  return (
    <div className="w-6/12 m-auto">

       <div className="m-auto text-center p-2 ">
           <h1 className="text-xl font-bold">Cart</h1>
           <button className="bg-black text-white p-2 m-2 rounded-lg
            cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
       </div>

      <div className="text-lg font-bold m-auto text-center">
         {
           CartData.length===0 && <h1>plz Add Item To Cart</h1>
       }
      </div>
      {CartData.map((item,index) => (
        <MenuItemList
           key={index}
          item={item}
        />
      ))}

{
  CartData.length>=1&&<div className="absolute right-80 pt-3 mt-6">
        total price: {totalPrice/100}
      </div>
}
      
    </div>
  )
}

export default Cart
