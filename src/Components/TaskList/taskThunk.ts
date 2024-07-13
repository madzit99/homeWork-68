import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import { Tasks } from "../../types";

export const fetchTasks = createAsyncThunk<Tasks, void, {}>(
  "tasks/fetch",
  async () => {
    const response = await axiosApi.get<Tasks>("todo.json");
    return response.data;
  }
);
