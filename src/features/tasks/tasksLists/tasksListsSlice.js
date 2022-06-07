import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { taskLists } from "../../../data";

const data = JSON.parse(localStorage.getItem("tasksLists"));

const initialState = data ? data : taskLists;

const tasksListsSlice = createSlice({
  name: "taskslists",
  initialState,
  reducers: {
    changeListLabel(state, action) {
      const { listId, label } = action.payload;
      const tasksList = state.find((elem) => elem.id === listId);

      if (tasksList) {
        tasksList.label = label;
      }

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    addList(state, action) {
      state.push({
        id: nanoid(),
        label: action.payload.label,
        tasks: [],
        color: {
          header: '$white',
          content: '$white'
        },
      });

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    changeListHeaderColor(state, action){
      const { listId, color } = action.payload;
      const list = state.find((elem) => elem.id === listId);

      console.log(listId, color);

      if(list){
        list.color.header = color
      }
    },
    changeListContentColor(state, action){
      const { listId, color } = action.payload;
      const list = state.find((elem) => elem.id === listId);

      console.log(listId, color);

      if(list){
        list.color.content = color
      }
    },
    changeTaskLabel(state, action) {
      const { listId, taskId, label } = action.payload;

      const list = state.find((elem) => elem.id === listId);
      const task = list && list.tasks.find((elem) => elem.id === taskId);

      if (task) {
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
        tags: []
      });

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    deleteTask(state, action) {
      const { listId, taskId } = action.payload;
      const list = state.find((elem) => elem.id === listId);

      if (list) {
        list.tasks = list.tasks.filter((elem) => elem.id !== taskId);
      }

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    changeTaskColor(state, action){
      const { listId, taskId, color } = action.payload;
      const list = state.find((elem) => elem.id === listId);
      const task = list && list.tasks.find((elem) => elem.id === taskId);


      if(task){
        task.color = color
      }

    },
    addTag(state, action) {
      const { listId, taskId } = action.payload;
      const list = state.find((elem) => elem.id === listId);
      const task = list && list.tasks.find((elem) => elem.id === taskId);


      if (task) {
        task.tags.push({
          id: nanoid(),
          color: "$white",
          label: "Etiquette",
        });
      }

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    deleteTag(state, action) {
      const { listId, taskId, tagId } = action.payload;
      const list = state.find((elem) => elem.id === listId);
      const task = list && list.tasks.find((elem) => elem.id === taskId);

      if (task) {
        task.tags = task.tags.filter((elem) => elem.id !== tagId);
      }
      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    changeTagLabel(state, action) {
      const { listId, taskId, tagId, label } = action.payload;
      const list = state.find((elem) => elem.id === listId);
      const task = list && list.tasks.find((elem) => elem.id === taskId);
      const tag = task && task.tags.find((elem) => elem.id === tagId);

      if (tag) {
        tag.label = label;
      }

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    changeTagColor(state, action) {
      const { listId, taskId, tagId, color } = action.payload;
      const list = state.find((elem) => elem.id === listId);
      const task = list && list.tasks.find((elem) => elem.id === taskId);
      const tag = task && task.tags.find((elem) => elem.id === tagId);

      if (tag) {
        tag.color = color;
      }

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
  },
});

export const {
  addList,
  changeListLabel,
  changeListHeaderColor,
  changeListContentColor,
  addTask,
  deleteTask,
  changeTaskColor,
  changeTaskLabel,
  addTag,
  deleteTag,
  changeTagLabel,
  changeTagColor,
} = tasksListsSlice.actions;

export default tasksListsSlice.reducer;
