import {createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 180,
    name: "Dayvid",
  },

  reducers:{

    setValue: (currentState, action) => {
      currentState.value = action.payload;
    },

    increment: (currentState) => {
      console.log(currentState);
      currentState.value += 1; //value 100
    },

    decrement: (currentState) => {
      currentState.value -= 1;
    },

    reset: (currentState) => {
      currentState.value = 0;
    }

  }
});

// Para exportar funciones, se usa actions
// export const incrementReducers = counterSlice.actions.increment;
// export const decremetReducers = counterSlice.actions.decrement; -> abreviando
export const {setValue, increment, decrement, reset} = counterSlice.actions;


// Para poder usar esto dentro del Store, debo exportarlo como reducer
export const counterSliceReducer = counterSlice.reducer;