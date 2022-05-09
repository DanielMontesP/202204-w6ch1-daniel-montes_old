import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    loadTodos: (todos, action) => [...action.payload],
    addTodo: (todos, action) => [...todos, action.payload],
    updateTodo: (todos, action) =>
      (todos.action = () => todos.id === action.id),
    removePRoject: (todos, action) =>
      (todos.action = () => todos.filter((todo) => todo.id !== action.payload)),
  },
});

export const { loadProjects: loadProjectsActionCreator } = todoSlice.actions;

export default todoSlice.reducer;
