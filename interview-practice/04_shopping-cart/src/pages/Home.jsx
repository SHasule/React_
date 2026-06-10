import React, { useEffect, useState } from 'react'
import Product from '../component/Product';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading,setloading]=useState(false)
  const [posts,setPosts]=useState([])

async function fetchData(){
  try {
     setloading(true)
     const res=await fetch(API_URL)
     const data=await res.json()
     setPosts(data)
     console.log(data)
     

  } catch (error) {
    console.log("error aya"); 
  }
  setloading(false)
}

   useEffect(()=>{
    fetchData()
   },[])
  
  return (
    <div>
       
       {
       
        loading ? <div> loading ....</div> : 
        posts.length > 0 ? (
          <div>
            {
              posts.map((post)=>(
                <div>
                <Product key={post.id} post={post}/>
                </div>

              ))
            }
          </div>
        ):
        (
          <div> data not found</div>
        )

       }
    </div>
  )
}

export default Home