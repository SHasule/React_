  
  import React, {useEffect} from 'react'
import { OPTION_API } from '../utils/Constants'
import {useDispatch} from "react-redux"
import { AddgetNowPlayingMovie } from '../utils/movieSlice'

  const nowPlayingMovies=()=>{
    const dispatch=useDispatch()

  const getNowPlayingMovies=async()=>{
            const data=await fetch(
                        'https://api.themoviedb.org/3/movie/now_playing?page=1',OPTION_API
                    )
                const json=await data.json()  
                console.log(json.results);   
                dispatch(AddgetNowPlayingMovie(json.results))   
            }
            useEffect(()=>{
                getNowPlayingMovies();
            })
   }

   export default nowPlayingMovies;
