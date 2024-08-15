import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    initialLoad: (state, action) => {
      state.todos = action.payload;
    },
    addTask: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    taskComplete: (state, action) => {
      const index = action.payload;
      const value = state.todos[index].isCompleted
      state.todos[index].isCompleted = !value
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    taskFavourite: (state, action) => {
      const index = action.payload;
      const value = state.todos[index].isFavourite;
      state.todos[index].isFavourite = !value;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    taskDelete: (state, action) => {
      const index = action.payload;
      state.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    taskEdit : (state, action) => {
      state.todos[action.payload.id].task = action.payload.task;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    }
  },
});

export const { addTask, initialLoad, taskComplete, taskFavourite, taskDelete, taskEdit } = TodoSlice.actions;
export default TodoSlice.reducer;
