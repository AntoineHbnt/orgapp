import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import tasksListsReducer from './features/tasks/tasksLists/tasksListsSlice'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = configureStore({ 
    reducer: {
        tasksLists: tasksListsReducer
    }, 
    composedEnhancer 
});
export default store;
