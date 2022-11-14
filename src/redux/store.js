// import {
//   legacy_createStore as createStore,
//   applyMiddleware,
//   combineReducers,
// } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import rpm from "redux-promise-middleware";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";

// import reducers from "./reducers";
import reducers from "./slices";

const persistConfig = {
  key: "fluffy-news",
  storage,
  // blacklist: ["counter"],
};

// const middleware = applyMiddleware(thunk, logger);
// const reducers = combineReducers({
//   counter: counterReducer,
//   books: bookReducer,
// });
const persistedReducer = persistReducer(persistConfig, reducers);
// const store = createStore(persistedReducer, middleware);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // ignore action by redux-persist
      },
    }).concat(logger),
});

export const persistedStore = persistStore(store);
export default store;
