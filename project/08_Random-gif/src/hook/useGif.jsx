import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const API_KEY="5BlxL0uO6Ut0NKiFQF8TCjvOTKlCDcjh"
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const Tagmemurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${Tag}`;

const useGif = (Tag) => {
  const [gif,setGif]=useState("")
  const [loading,setLoading]=useState (false)


  async function fetchData(Tag){
    setLoading(true)
    
    
      const {data}=await axios(Tag ? `${url}&tag=${Tag}`:(url))
     const ImageSource=data.data.images.downsized_large.url;
   
      setGif(ImageSource) 

      setLoading(false)
  }
  
   
      useEffect(()=>{
        fetchData("car")
      },[])
  
  
  
      return{gif,loading,fetchData}
  
}

export default useGif
