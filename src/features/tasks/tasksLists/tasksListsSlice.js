import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { taskLists } from "../../../data";

const data = JSON.parse(localStorage.getItem("tasksLists"));

const initialState = data ? data : taskLists;

const tasksListsSlice = createSlice({
  name: "taskslists",
  initialState,
  reducers: {
    changeTasksListLabel(state, action) {
      const { id, label } = action.payload;
      const tasksList = state.find((elem) => elem.id === id);

      if (tasksList) {
        tasksList.label = label;
      }

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    addTaskList(state, action) {
      state.push({
        id: nanoid(),
        label: action.payload.label,
        tasks: [],
      });

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    changeTaskLabel(state, action) {
      const {listId, taskId, label} = action.payload;
      const list = state.find((elem) => elem.id === listId);
      const task = list && list.tasks.find((elem) => elem.id === taskId);

      if(task){
        task.label = label;
      }

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    addTask(state, action) {
      const { id, task } = action.payload;
      const list = state.find((elem) => elem.id === id);

      list.tasks.push({
        ...task,
        id: nanoid(),
      });

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    deleteTask(state, action) {
      const {listId, taskId} = action.payload;
      const list = state.find((elem) => elem.id === listId);

      if(list){
        list.tasks = list.tasks.filter((elem) => elem.id !== taskId)
        
      }

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    changeTagLabel(state, action){
      const {listId, taskId, tagId, label} = action.payload
      const list = state.find((elem) => elem.id === listId);
      const task = list && list.tasks.find((elem) => elem.id === taskId);
      const tag = task && task.tags.find((elem) => elem.id === tagId);

      if(tag){
        tag.label = label
      }

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    changeTagColor(state, action){
      const {listId, taskId, tagId, color} = action.payload
      const list = state.find((elem) => elem.id === listId);
      const task = list && list.tasks.find((elem) => elem.id === taskId);
      const tag = task && task.tags.find((elem) => elem.id === tagId);

      if(tag){
        tag.color = color
      }

      localStorage.setItem("tasksLists", JSON.stringify(state));
    }
  },
});

export const { addTaskList, addTask, deleteTask, changeTagLabel, changeTagColor, getTasksLists, changeTasksListLabel, changeTaskLabel } =
  tasksListsSlice.actions;

export default tasksListsSlice.reducer;
