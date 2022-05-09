import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    loadTodos: (todos, action) => [...action.payload],
    addTodo: (todos, action) => [...todos, action.payload],
    updateTodo: (todos, action) =>
      (todos.action = () => todos.id === action.id),
    removeTodo: (todos, action) =>
      (todos.action = () => todos.filter((todo) => todo.id !== action.payload)),
  },
});

export const { loadTodos: loadTodosActionCreator } = todosSlice.actions;

export default todosSlice.reducer;
