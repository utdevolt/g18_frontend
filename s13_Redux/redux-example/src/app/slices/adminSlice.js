import {createSlice} from "@reduxjs/toolkit"

const adminSlice = createSlice({
    name: "adminUser",
    initialState: {
      userName: "UTDEVOLT",
      userBN: "std.",
    },
});

export const adminSliceReducer = adminSlice.reducer;