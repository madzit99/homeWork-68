import { createSlice } from "@reduxjs/toolkit";
import { Tasks } from "../../types";
import { fetchTasks } from "./taskThunk";

export interface TaskState {
  tasks: Tasks | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: TaskState = {
  tasks: null,
  isLoading: false,
  isError: false,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchTasks.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const taskReducer = taskSlice.reducer;
