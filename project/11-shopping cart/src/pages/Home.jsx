import React, { useEffect, useState } from 'react'
import Spinner from '../component/Spinner'
import Product from '../component/Product'
const Home = () => {
  const [loading,setLoading]=useState(false)
  const [posts,setPosts]=useState([])
  const API_URL = "https://fakestoreapi.com/products";

   async function fetchProductData() {
       setLoading(true)

  try {
      const res=await fetch(API_URL)
      const data=await res.json()
         setPosts(data)
  } 
  catch (error) {
    console.log("error aaya hai");
    setPosts([])
  }

  setLoading(false)
   }

   useEffect(()=>{
         fetchProductData()
         console.log("dataa fetching");
         
   },[])
  
  return (
    <div>
           {
             loading ? <Spinner /> :
             posts.length >0 ? (
              <div>
                  {
                    posts.map((post)=>{
                       return   <Product key={post.id} post={post}/>
                    })
                  }
              </div>
             ) 
             : <h2>post not Found</h2>

           } 

    </div>
  )
}

export default Home