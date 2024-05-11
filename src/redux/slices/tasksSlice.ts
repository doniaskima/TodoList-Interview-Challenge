import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { sortNotDoneToDone } from '../../utils/sortNotDoneToDone';
import { useToasts } from 'react-toast-notifications'; 

export interface TaskState {
  id: string;
  taskText: string;
  isDone: boolean;
}

// Set the initial state as an empty array of TaskState.
const initialState: TaskState[] = [];

// Create a slice for tasks with initial state and reducers to handle actions.
export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Add a task to the state array if it doesn't already exist.
    addTask: (state, action) => {
         const taskAlreadyCreated = state.find(
        (task) =>
          task.taskText.toUpperCase() === action.payload.taskText.toUpperCase()
      );
      if (taskAlreadyCreated) {
        alert('This task already exists.');
      } else {
        state.unshift(action.payload);
      }
    },
    // Remove a task from the state array by its id.
    removeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    // Toggle the completion status of a task and sort the list.
    updateTask: (state, action) => {
      state.forEach((task) => {
        if (task.id === action.payload.id) {
          task.isDone = !task.isDone;
        }
      });
      state.sort(sortNotDoneToDone);
    },
    // Update the text of a task
    updateTaskText: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        task.taskText = action.payload.taskText;
      }
    },
  },
});

// Export actions from this slice for use in UI components or other parts of the application.
export const { addTask, removeTask, updateTask, updateTaskText } =
  tasksSlice.actions;

// A selector to retrieve the tasks state slice from the entire RootState.
export const selectTasks = (state: RootState) => state.tasks;

// Export the reducer for integration into the global Redux store configuration.
export default tasksSlice.reducer;
