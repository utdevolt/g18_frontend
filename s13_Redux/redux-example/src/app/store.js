import {configureStore} from "@reduxjs/toolkit"
import { counterSliceReducer } from "./slices/counterSlice";
import { name1SliceReducer } from "./slices/namesSlice";
import { adminSliceReducer } from "./slices/adminSlice";
import { taskSliceReducer } from "./slices/taskSlice";


export const globalStore = configureStore({
  reducer: {
    counter: counterSliceReducer,
    userAdmin: adminSliceReducer,
    user1: name1SliceReducer,
    task: taskSliceReducer,

  },
});