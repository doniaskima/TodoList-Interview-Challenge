import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../slices/tasksSlice';  

const initialTasks = [
  {
    id: '1',
    taskText: 'Finish homework',
    isDone: false,
  },
  {
    id: '2',
    taskText: 'Go grocery shopping',
    isDone: false,
  },
  {
    id: '3',
    taskText: 'Exercise for 30 minutes',
    isDone: true,
  },
];

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: {
    tasks: initialTasks,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>; 
