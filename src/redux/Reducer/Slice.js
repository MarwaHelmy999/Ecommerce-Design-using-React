import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        count:2000
    },
    reducers:{
        increament: (state)=>{
            state.x1 += 1
        },
        decreament: (state)=>{
            state.x1 -= 1
        }
    }
})
export const {increament , decreament} = CounterSlice.actions
export default CounterSlice.reducer