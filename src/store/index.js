import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import TodoSlice from './TodoSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: TodoSlice,
  },
})

export default store