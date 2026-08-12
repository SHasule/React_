import {createSlice} from "@reduxjs/toolkit"

const cardSlice=createSlice({
 name:"cart",
 initialState:{
     item:[],
 },
  reducers:{
    addItem:(state,action)=>{
        state.item.push(action.payload)
    },
    removeItem:(state,action)=>{
        state.item.pop()
    }
  }
})
export const {addItem,removeItem}=cardSlice.actions;
export default cardSlice.reducer;