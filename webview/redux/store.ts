import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import requestMethodReducer from "../features/requestMethod/requestMethodSlice";
import requestAuthReducer from "../features/requestAuth/requestAuthSlice";
import responseReducer from "../features/response/responseSlice";

export const store = configureStore({
  reducer: {
    requestMethod: requestMethodReducer,
    requestAuth: requestAuthReducer,
    response: responseReducer,
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
