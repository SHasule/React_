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
        state.item = state.item.filter(item => item.id !== action.payload);
    },
    clearCart:(state,action)=>{
        state.item.length=0; //[]
    },
   
  }
})
export const {addItem,removeItem,clearCart}=cardSlice.actions;
export default cardSlice.reducer;