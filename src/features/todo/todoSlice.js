import {createSlice } from '@reduxjs/toolkit';
const initialState = {
  todos: localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")): [],
  currentTodo: {},
  isDeleteModalOPen: false,
};



export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState, 
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    openDeleteModal: (state, action) => {
      state.currentTodo = action.payload.currentTodo;
      state.isDeleteModalOPen = action.payload.isDeleteModalOPen;
    },
    closeDeleteModal: (state, action) => {
      state.currentTodo = action.payload.currentTodo
      state.isDeleteModalOPen = action.payload.isDeleteModalOPen;
    },
    updateTodo: (state, action) => {
      state.todos.find(todo => todo.id === action.payload.todo.id).isCompleted = action.payload.isCompleted;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, openDeleteModal, closeDeleteModal } = todoSlice.actions;


export default todoSlice.reducer;
