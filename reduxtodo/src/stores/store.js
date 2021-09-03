import {configureStore} from "@reduxjs/toolkit";
import todoListReducer from "../components/storageSlice";

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
