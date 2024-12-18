import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}

export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
        increment : (state=initialState) => {
            state.value += 1;
        },
        decrement: (state=initialState) => {
            state.value -= 1;
        }
    }
})

export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer;