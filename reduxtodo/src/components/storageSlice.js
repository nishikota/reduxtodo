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
      state.inputValue = "";
    },
    removeValue: (state, action) => {
      const oldStorage = [...state.valueStorage];
      // const removeKey = () => {
      //   return oldStorage !== action.payload;
      // };
      // const newStorage = oldStorage.filter(removeKey);
      oldStorage.splice(action.payload, 1);
      state.valueStorage = oldStorage;
    },
  },
});

export const selectInput = (state) => state.todoList.inputValue;
export const storageInside = (state) => state.todoList.valueStorage;

export const {inputEvent, addValue, removeValue} = storageSlice.actions;

export default storageSlice.reducer;
