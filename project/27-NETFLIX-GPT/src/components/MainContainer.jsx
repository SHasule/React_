import React from 'react'
import {useSelector} from "react-redux"
import VideoBackground from './VideoBackgroud'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movie=useSelector(store=>store.movies?.nowPlayingMovies)
    if(!movie) return ;

    const mainMovie=movie[0]
    console.log(mainMovie);
    const {original_title,overview}=mainMovie
  
  return (
    <div>
        <VideoTitle original_title={original_title} overview={overview}/>
       <VideoBackground/>

    </div>
  )
}

export default MainContainer
