import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { taskLists } from "../../../data";

const initialState = taskLists;

const tasksListsSlice = createSlice({
  name: "taskslists",
  initialState,
  reducers: {
    addTaskList(state, action) {
      state.push({
        id: nanoid(),
      });
    },
  },
});

export const { addTaskList } = tasksListsSlice.actions;

export default tasksListsSlice.reducer;
