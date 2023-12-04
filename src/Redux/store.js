import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todosSlice from "./todosSlice";



export const store=configureStore({
    reducer:{
        counter:counterSlice,
        todos:todosSlice,
    }
})