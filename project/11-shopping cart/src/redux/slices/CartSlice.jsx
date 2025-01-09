import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {
            
        },
        remove:(state,action) => {
           
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;