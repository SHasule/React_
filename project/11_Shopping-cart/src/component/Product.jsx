import React from 'react'

const Product = ({post}) => {
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
          selected ? (
           <p> remove cart</p>
          ):(
             <p>Add to cart</p>
          )
        }
       </button>
    </div>
  )
}

export default Product