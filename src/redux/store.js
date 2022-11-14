import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import logger from "redux-logger";
// import rpm from "redux-promise-middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import counterReducer from "./reducers/counter";
import bookReducer from "./reducers/books";

const persistConfig = {
  key: "fluffy-news",
  storage,
};

const middleware = applyMiddleware(thunk, logger);
const reducers = combineReducers({
  counter: counterReducer,
  books: bookReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, middleware);

export const persistedStore = persistStore(store);
export default store;
