
import { createSlice } from '@reduxjs/toolkit'

  const movieSlice=createSlice({
   name:"movies",
    initialState: {
    nowPlayingMovies: null,
    TrailerVideo:null
  },

   reducers:{
      AddgetNowPlayingMovie:(state,action)=>{
        state.nowPlayingMovies=action.payload
      },
      AddTrailerVideo:(state,action)=>{
        state.TrailerVideo=action.payload
      }
   }

  })
  export const{AddgetNowPlayingMovie,AddTrailerVideo}=movieSlice.actions;
  export default movieSlice.reducer;