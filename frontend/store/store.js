import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import baseApi from "./api/baseApi";
import modalReducer from "./slices/modalSlice";
import { errorLoggingMiddleware } from "./middleware";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, errorLoggingMiddleware),
});

setupListeners(store.dispatch);
