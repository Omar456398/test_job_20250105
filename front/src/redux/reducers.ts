import { createSlice } from "@reduxjs/toolkit";
import { TaskType, TasksSliceType } from "../components/types";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    isLoading: false,
    isError: false,
  } as TasksSliceType,
  reducers: {
    setTasks: (state: TasksSliceType, action: { payload: TaskType[] }) => {
      state.tasks = action.payload;
    },
    setLoading: (state: TasksSliceType, action: { payload: boolean }) => {
      state.isLoading = action.payload;
    },
    setError: (state: TasksSliceType, action: { payload: boolean }) => {
      state.isError = action.payload;
    },
  },
});

export const { setTasks, setLoading, setError } =
  tasksSlice.actions;
export default tasksSlice.reducer;
