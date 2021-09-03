import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
  valueStorage: [],
};

export const storageSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    inputEvent: (state, action) => {
      state.inputValue = action.payload;
    },
    addValue: (state) => {
      const newStorage = [...state.valueStorage];
      newStorage.push(state.inputValue);
      state.valueStorage = newStorage;
      console.log("second", state.valueStorage);
    },
    removeValue: (state, key) => {
      const newStorage = [...state.valueStorage];
    },
  },
});

export const selectInput = (state) => state.todoList.inputValue;
export const storageInside = (state) => state.todoList.valueStorage;

export const {inputEvent, addValue} = storageSlice.actions;

export default storageSlice.reducer;
