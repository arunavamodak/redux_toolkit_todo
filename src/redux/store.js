import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice";

export default configureStore({
    reducer:{
        tasks: taskReducer,
    }
});