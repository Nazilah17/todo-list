import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    value: JSON.parse(localStorage.getItem("tasks")) || [],
  },
  reducers: {
    setTasks: (state, action) => {
      state.value = action.payload;
    },
    addTask: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteTask: (state, action) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
    },
    checkTask: (state, action) => {
      state.value = state.value.map((task) => (task.id === action.payload ? { ...task, checked: !task.checked } : task));
    },
    editTask: (state, action) => {
      const { id, editedActivity } = action.payload;

      state.value = state.value.map((task) => (task.id === id ? { ...task, activity: editedActivity } : task));
    },

    clearTasks: (state) => {
      state.value = [];
    },
  },
});

export const { setTasks, addTask, deleteTask, checkTask, editTask, clearTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
