import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import paintReducer from "./reducers/paintReducer";
const rootReducer = combineReducers({ paintReducer: paintReducer });
const store = configureStore({ reducer: rootReducer });

export default store;
