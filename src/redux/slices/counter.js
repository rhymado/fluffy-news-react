import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  // default value
  number: 0,
};

const counterReset = createAction("COUNTER_RESET");

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    counterUp: (prevState) => {
      // return {
      //   ...prevState,
      //   number: prevState.number + 1,
      // };
      prevState.number = prevState.number + 1;
    },
    counterDown: (prevState) => {
      // return {
      //   ...prevState,
      //   number: prevState.number === 0 ? 0 : prevState.number - 1,
      // };
      prevState.number = prevState.number === 0 ? 0 : prevState.number - 1;
    },
  },
  //   extraReducers: {
  //     [counterReset]: (prevState) => {
  //       return {
  //         ...prevState,
  //         number: initialState.number,
  //       };
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(counterReset, (prevState) => ({
      ...prevState,
      number: initialState.number,
    }));
  },
});

// export action
// export const { counterUp, counterDown } = counterSlice.actions;
export const counterActions = {
  ...counterSlice.actions,
  counterReset,
};
// export reducer
export default counterSlice.reducer;
