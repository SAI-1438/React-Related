import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetch=createAsyncThunk("fetchData",()=>{
    const response=axios.get('https://jsonplaceholder.typicode.com/todos').then((response)=>response.data)
    return response
})

export const ReduxSlice=createSlice({
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

export default ReduxSlice.reducer