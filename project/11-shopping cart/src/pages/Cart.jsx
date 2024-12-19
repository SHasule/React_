import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cartitem from "../component/Cartitem";
import { Link } from "react-router-dom";
const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curval) => acc + curval.price, 0));
  }, [cart]);
  return (
    <div>
      <div className="flex">
        {cart.length > 0 ? (
          <div>
            {cart.map((item, index) => {
              return <Cartitem key={item.id} item={item} itmeIndex={index} />;
            })}



           <div>
          <div>
          <div>Your Cart</div>
          <div>Summary</div>

          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p>Total Amount :${totalAmount}</p>
          <button>CheckOut Now</button>
        </div>
         </div>

          </div>
        ) 
        : 
        (
          <div>
            <h1>Cart Empty</h1>
            <Link to={"/"}>
              <button>Shop Now</button>
            </Link>
          </div>
        )}
      </div>

     
    </div>
  );
};

export default Cart;
