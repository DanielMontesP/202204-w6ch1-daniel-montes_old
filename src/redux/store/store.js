import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todosSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
