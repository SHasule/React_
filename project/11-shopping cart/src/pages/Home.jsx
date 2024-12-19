import React, { useEffect, useState } from 'react'
import Spinner from '../component/Spinner';
import Product from '../component/Product';
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading]=useState(false)
  const[posts,setPosts]=useState([])
  
  async function fetchProduct(){
    setLoading(true)
     try{
         const res=await fetch(API_URL);
         const data=await res.json()
         setPosts(data)
     }
     catch(error){
        console.log("ERROR: somthing went wrong");
        setPosts([])
 
     }
     setLoading(false)
  }

  useEffect(()=>{
    fetchProduct() 
  },[])

  return (
    <div>

      {
        loading ? <Spinner/>:
          posts.length > 0 ? (
           <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-col-2 xs:grid-cols-1 p-2  min-h-[80vh] max-w-6xl mx-auto '>
            {
              posts.map((post)=>{
                return(
                  <div key={post.id}>
                     <Product post={post} />
                  </div>
                )
              })
            }
           </div>
          ):(
           <div className='flex justify-center items-center'>
             <p>post not found</p>
           </div>
          )
        
      }

    </div>
  )
}

export default Home