import React from 'react'

const Product = ({post}) => {
  return (
    <div>

      <div className='text-bold'>{post.title}</div>
      <div>{post.description}</div>
     
      <img src={post.image} alt="" />
    
    <div>
      <p>{post.price}</p>
      {
        false ? <div>remove from cart</div>: <div>add to cart</div>
      }
    </div>
    </div>
  )
}

export default Product