import {
  configureStore,
  // getDefaultMiddleware,
} from "@reduxjs/toolkit";
import verbQuery from "./verbQuerySlice";


const store = configureStore({
  reducer: verbQuery,

  // middleware: [...getDefaultMiddleware({ thunk: false })], - Middlewares included by default but can be deactivated
});

export default store;
