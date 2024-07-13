import { createSlice } from "@reduxjs/toolkit";
import { Tasks } from "../../types";

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
  extraReducers: (builder) => {},
});

export const taskReducer = taskSlice.reducer;