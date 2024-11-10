import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TasksState } from "./types";

const initialState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, actions) => {
      state.tasks = [...state.tasks, actions.payload];
    },
    deleteTask: (state, actions) => {
      state.tasks = state.tasks.filter((task) => task.id !== actions.payload);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
