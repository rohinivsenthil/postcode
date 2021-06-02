import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import requestMethodReducer from "../features/requestMethod/requestMethodSlice";

export const store = configureStore({
  reducer: {
    requestMethod: requestMethodReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
