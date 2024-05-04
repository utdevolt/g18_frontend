import {createSlice} from "@reduxjs/toolkit"

const name1Slice = createSlice({
  name: "user1",
  initialState: {
    value: "Dayvid Ramos",
  }
});

export const name1SliceReducer = name1Slice.reducer;