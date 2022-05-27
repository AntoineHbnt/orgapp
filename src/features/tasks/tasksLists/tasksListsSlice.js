import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { taskLists } from "../../../data";

const data = JSON.parse(localStorage.getItem('tasksLists'));

const initialState = data ? data : taskLists;

const tasksListsSlice = createSlice({
  name: "taskslists",
  initialState,
  reducers: {
    changeTasksListLabel(state, action) {
      const {id, label} = action.payload
      const tasksList = state.find((elem) => elem.id === id) 

      if(tasksList){
        tasksList.label = label
      }

      localStorage.setItem('tasksLists', JSON.stringify(state))
    },
    addTaskList(state, action) {
      state.push({
        id: nanoid(),
        label: action.payload.label,
        tasks: []
      });

      localStorage.setItem('tasksLists', JSON.stringify(state))
    },
    addTask(state, action) {
      const {id, task} = action.payload;
      const list = state.find((elem) => elem.id === id)
      console.log(id, task);
      list.tasks.push({
        ...task,
        id: nanoid()
      })

      localStorage.setItem('tasksLists', JSON.stringify(state))
    }
  },
});

export const { addTaskList, addTask, getTasksLists, changeTasksListLabel } = tasksListsSlice.actions;

export default tasksListsSlice.reducer;
