import {
  configureStore,
  combineReducers,
  // getDefaultMiddleware,
} from "@reduxjs/toolkit";

import verbQuerySlice from "./verbQuerySlice";
import verbDataSlice from "./verbDataSlice";

const reducer = combineReducers({
  verbQuery: verbQuerySlice,
  verbData: verbDataSlice,
});

const store = configureStore({
  reducer,
  // middleware: [...getDefaultMiddleware({ thunk: false })], - Middlewares included by default but can be deactivated
});

export default store;
