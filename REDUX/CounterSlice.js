// import { createSlice } from "@reduxjs/toolkit";

// export const CounterSlice = createSlice({
//     name:'CounterApp',
//     initialState:{
//         value:0,
//         // Id:1,
//         // Name:'sai',
//         // Age:25,
//     },
//     reducers:{
//         increment:(state,action)=>{
//             state.value++;
//         },
//         decrement:(state,action)=>{
//             state.value--;
//         },
//         multiply:(state,action)=>{
//             state.value=state.value*3;
//         }
//     }
// })

// export default CounterSlice.reducer
// export const {increment,decrement,multiply}=CounterSlice.actions

import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetch=createAsyncThunk("fetchData",()=>{
    const response=axios.get('https://jsonplaceholder.typicode.com/todos').then((response)=>response.data)
    return response
})

export const CounterSlice=createSlice({
    name:'App',
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetch.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(fetch.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        });
        builder.addCase(fetch.rejected,(state,action)=>{
            state.isError=true;
        })
    }
})

export default CounterSlice.reducer