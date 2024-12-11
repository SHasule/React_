import { configureStore } from '@reduxjs/toolkit'
import { CounterSlice } from './Slice/CounterSlice'

export const Store = configureStore({
  reducer: {
    counter: CounterSlice
  },
})

