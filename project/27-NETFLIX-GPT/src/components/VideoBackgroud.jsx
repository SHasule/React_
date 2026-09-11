import React,{useEffect,useState} from 'react'
import { OPTION_API } from '../utils/Constants'
import {useDispatch,useSelector} from "react-redux"
import { AddTrailerVideo } from '../utils/movieSlice'

const VideoBackground = () => {
 const trailerVideo=useSelector((store)=>store.movies?.TrailerVideo)
  const dispatch=useDispatch();

    const getMovieVideo= async()=>{
       const data=await fetch('https://api.themoviedb.org/3/movie/969681/videos?language=en-US',OPTION_API)
       const json=await data.json()

       const filteredVdo=json.results.filter((vdo)=>vdo.type=="Trailer")   
       const trailer= filteredVdo.length? filteredVdo[0] : json.results[0]

      dispatch(AddTrailerVideo(trailer))
    }

    useEffect(() => {
      getMovieVideo()
    }, [])

        return (
                <div>
                    <iframe
                     width="560"
                     height="315"
                     src={"https://www.youtube.com/embed/P3uI5sLosKU?si="+trailerVideo?.key} 
                     title="YouTube video player"                    
                       ></iframe>
            
                </div>
        )
        }

export default VideoBackground

