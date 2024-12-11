import React, { useEffect, useState } from 'react'
import Sipnner from '../component/Sipnner';
import Product from '../component/Product';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [post,setPost]=useState([]);
  const [loading,setLoading]=useState(false)

  async function fetchPoducts() {
       setLoading(true)
    try{
     
      const res= await fetch(API_URL);
      const data=await res.json();
      setPost(data)
    }
    catch(error){
        console.log("ERROR: error found");
        setPost([])  
            
    }
    setLoading(false)
  
  }

  useEffect(()=>{
    fetchPoducts()
    
    
  },[])
  return (
    <div>
          {
            loading ? <Sipnner /> :
            (
              post.length>0 ?
              (
              <div>
                  {
                   post.map((post)=>{
                  <Product key={post.key} post={post}/>
                 })
                 }
                </div>
              ):
              (
               <div> no data found </div>
              )
            )
          }

    </div>
  )
}

export default Home