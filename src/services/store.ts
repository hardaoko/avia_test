import { configureStore } from "@reduxjs/toolkit";
import { ticketsReducer } from "./reducers/tickets";

export const store = configureStore({
  reducer: ticketsReducer,
});
