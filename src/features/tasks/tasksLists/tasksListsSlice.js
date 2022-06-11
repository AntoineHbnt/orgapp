import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { taskLists } from "../../../data";

const data = JSON.parse(localStorage.getItem("tasksLists"));

const initialState = data ? data : taskLists;


const findList = (state, listId) => {
  return state.find((elem) => elem.id === listId);
}

const findTask = (state, listId, taskId) => {
  return findList(state,listId).tasks.find((elem) => elem.id === taskId);
}

const findTag = (state, listId, taskId, tagId) => {
  return findTask(state,listId, taskId).tags.find((elem) => elem.id === tagId);
}

const findCheckbox = (state, listId, taskId, checkboxId) => {
  return findTask(state,listId, taskId).checkList.checkboxList.find(elem => elem.id === checkboxId);
}


const tasksListsSlice = createSlice({
  name: "taskslists",
  initialState,
  reducers: {
    changeListLabel(state, action) {
      const { listId, label } = action.payload;
      const tasksList = findList(state, listId);

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
          header: "$white",
          content: "$white",
        },
      });

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    deleteList(state, action) {
      const { listId } = action.payload;
      const newState = findList(state, listId);

      localStorage.setItem("tasksLists", JSON.stringify(newState));
      return newState;
    },
    changeListHeaderColor(state, action) {
      const { listId, color } = action.payload;
      const list = findList(state, listId);

      if (list) {
        list.color.header = color;
      }
      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    changeListContentColor(state, action) {
      const { listId, color } = action.payload;
      const list = findList(state, listId);

      console.log(listId, color);

      if (list) {
        list.color.content = color;
      }
      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    changeTaskLabel(state, action) {
      const { listId, taskId, label } = action.payload;
      const task = findTask(state, listId, taskId);

      if (task) {
        task.label = label;
      }

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    addTask(state, action) {
      const { id, task } = action.payload;
      const list = findList(state, id);

      list.tasks.push({
        ...task,
        id: nanoid(),
        tags: [],
      });

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    deleteTask(state, action) {
      const { listId, taskId } = action.payload;
      const list = findList(state, listId);

      if (list) {
        list.tasks = list.tasks.filter((elem) => elem.id !== taskId);
      }

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    changeTaskColor(state, action) {
      const { listId, taskId, color } = action.payload;
      const task = findTask(state, listId, taskId);

      if (task) {
        task.color = color;
      }
    },
    addTag(state, action) {
      const { listId, taskId } = action.payload;
      const task = findTask(state, listId, taskId);

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
      const task = findTask(state, listId, taskId);

      if (task) {
        task.tags = task.tags.filter((elem) => elem.id !== tagId);
      }
      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    changeTagLabel(state, action) {
      const { listId, taskId, tagId, label } = action.payload;
      const tag = findTag(state, listId, taskId, tagId);

      if (tag) {
        tag.label = label;
      }

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    changeTagColor(state, action) {
      const { listId, taskId, tagId, color } = action.payload;
      const tag = findTag(state, listId, taskId, tagId);

      if (tag) {
        tag.color = color;
      }

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    addCheckbox(state, action) {
      const { listId, taskId } = action.payload;
      const task = findTask(state, listId, taskId);

      if(task){
        task.checkList.checkboxList.push({
          id: nanoid(),
          state: 'todo',
          label: 'Chose à faire'
        })
      }

      localStorage.setItem("tasksLists", JSON.stringify(state));

    },
    deleteCheckbox(state, action) {
      const { listId, taskId, checkboxId } = action.payload;
      const task = findTask(state, listId, taskId);

      if(task){
        task.checkList.checkboxList = task.checkList.checkboxList.filter((elem) => {
          return elem.id !== checkboxId
        })
      }

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    changeCheckboxState(state, action) {
      const { listId, taskId, checkboxId } = action.payload;
      const checkbox = findCheckbox(state, listId, taskId, checkboxId);

      if(checkbox){
        checkbox.state = checkbox.state === 'done' ? 'todo' : 'done' 
      }

      localStorage.setItem("tasksLists", JSON.stringify(state));
    },
    changeCheckboxLabel(state, action){
      const { listId, taskId, checkboxId, label } = action.payload;
      const checkbox = findCheckbox(state, listId, taskId, checkboxId);

      if(checkbox){
        checkbox.label = label 
      }

      localStorage.setItem("tasksLists", JSON.stringify(state));
    }

  },
});

export const {
  addList,
  deleteList,
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
  addCheckbox,
  deleteCheckbox,
  changeCheckboxState,
  changeCheckboxLabel
} = tasksListsSlice.actions;

export default tasksListsSlice.reducer;
