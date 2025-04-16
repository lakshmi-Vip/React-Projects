import { configureStore } from "@reduxjs/toolkit";
import CounterReucer from "./counterSlice";

const store = configureStore({
    reducer: {
        counter: CounterReucer
    }
})
export default store;