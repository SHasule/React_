import React, { useEffect, useState } from 'react'
// import {process} from "react"
// import ".env"
import axios from "axios"
import Loader from './Loader'
import useGif from '../hook/useGif'

const Rondom = () => {
//   const [gif,setGif]=useState("")
// const [loading,setLoading]=useState (false)

//  const API_KEY="5BlxL0uO6Ut0NKiFQF8TCjvOTKlCDcjh"

// async function fetchData(){
//   setLoading(true)

//   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//     const {data}=await axios(url)
//    const ImageSource=data.data.images.downsized_large.url;
//   //  console.log(ImageSource);  
//     setGif(ImageSource) 

//     setLoading(false)
// }

 
    // useEffect(()=>{
    //   fetchData()
    // },[])

    const {gif,loading,fetchData}=useGif();




  return (
    <div className=' flex flex-col gap-y-5 items-center
    rounded-sm border border-black nt-[10px] w-[550px]   bg-green-500'>

      <h1 className='text-2xl font-bold uppercase underline mt-[12px]'>A Random Gif</h1>
  

   {
    loading ?(
      <Loader />
    ):(<img src={gif} alt="img" width={400} />)
   }

      {/* <img src={gif} alt="img" width={450} /> */}

  
      <button  onClick={()=>fetchData()} className='
      w-10/12 py-1 text-xl rounded-lg hover:bg-green-400 bg-yellow-400 mb-[12px]'>Generate</button>
    </div>
  )
}

export default Rondom