import { configureStore } from '@reduxjs/toolkit'
import  CounterSlice  from './Slice/CounterSlice'

  const  Store = configureStore({
  
  reducer: {
    counter: CounterSlice
  },

})

export default Store