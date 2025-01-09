import React from 'react'

const Product = ({post}) => {
  console.log("post data", post);
  
  return (
    <div>
         <div>
          <p>{post.title}</p>
         </div>
         <div>
          <p>{post.description}</p>
         </div>
         <div>
          <img src={post.image} alt="" />
         </div>
         <div>
          <p>{post.price}</p>
         </div>

         <button>
             {
              true ? <p>remove item</p> :<p> add to cart</p>

             }
             <p>hey</p>
         </button>
    </div>
  )
}

export default Product
