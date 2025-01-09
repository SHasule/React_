import React, { useEffect, useState } from 'react'
import Cartitem from "../component/Cartitem"
import {  useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Cart = () => {
 const {cart}=useSelector((state)=>state.cart)
 const [totalAmountValue,settotalAmountValue]=useState(0)
 useEffect(()=>{
        settotalAmountValue(cart.reduce((acc,curVal)=>acc+curVal.price,0))
 },[])

  return (
    <div>
          
          {
              cart.length >0 ? (
              <div>
                {
                    cart.map((item,index)=>{
                      return < Cartitem key={index.id} item={item} itemIndex={index}/>
                    })
                }
              </div>

                       
            ):
            (<> 
              <h2>cart is empty</h2>
             <NavLink to="/">
             <button>shop now</button>
             </NavLink>
              </>)
          }



          <div>
          <div>
                 <div>Your Cart</div>
              <div>summary</div>
              <p>
               <span>total item : {cart.length}</span>
              </p>
         </div>
               

               <div>
                <p>total amount : {totalAmountValue}</p>
                  <button>
                    checkout now
                  </button>
               </div>
    
          </div>
    </div>
  )
}

export default Cart
