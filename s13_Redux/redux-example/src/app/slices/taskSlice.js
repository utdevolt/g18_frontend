import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name:"tasks",
  initialState:{
    tasks: localStorage.getItem("tasks") 
      ? JSON.parse(localStorage.getItem("tasks")) : [],
  },

  reducers:{
    addTask: (state,action) => {
      // action: {type="", payload:{}}
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  }
});

export const taskSliceReducer = taskSlice.reducer;

export const {addTask} = taskSlice.actions;