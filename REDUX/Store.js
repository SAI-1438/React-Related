import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import ReduxSlice from "../ReduxAPI-Call/ReduxSlice";


export default configureStore({
 //Store-Redux   
 reducer:{
    counter:CounterSlice,
    counters:ReduxSlice
 }
})