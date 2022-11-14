import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import bookReducer from "./books";

export default combineReducers({
  counter: counterReducer,
  books: bookReducer,
});
