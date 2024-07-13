import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import { Tasks } from "../../types";
import { RootState } from "../../app/store";

export const fetchTasks = createAsyncThunk<Tasks, void, {}>(
  "tasks/fetch",
  async () => {
    const response = await axiosApi.get<Tasks>("todo.json");
    return response.data;
  }
);

export const deleteTask = createAsyncThunk<void, string, { state: RootState }>(
  "tasks/deleteTask",
  async (taskId) => {
    await axiosApi.delete(`todo/${taskId}.json`);
  }
);

export const toggleTask = createAsyncThunk<void, string, { state: RootState }>(
  "tasks/toggleTask",
  async (taskId, thunkAPI) => {
    const currentState = thunkAPI.getState().tasks;
    if (currentState && currentState.tasks && currentState.tasks[taskId]) {
      const updatedTask = {
        ...currentState.tasks[taskId],
        status: !currentState.tasks[taskId].status,
      };
      await axiosApi.put(`todo/${taskId}.json`, updatedTask);
    }
  }
);
