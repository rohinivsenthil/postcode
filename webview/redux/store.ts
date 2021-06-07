import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import requestAuthReducer from "../features/requestAuth/requestAuthSlice";
import requestBodyReducer from "../features/requestBody/requestBodySlice";
import requestHeaderReducer from "../features/requestHeader/requestHeaderSlice";
import requestMethodReducer from "../features/requestMethod/requestMethodSlice";
import requestUrlReducer from "../features/requestUrl/requestUrlSlice";
import responseReducer from "../features/response/responseSlice";
import codeGenOptionsReducer from "../features/codeGen/codeGenSlice";

let preloadedState;
if (typeof window !== "undefined") {
  preloadedState = (window as any).__PRELOADED_STATE__;
  delete (window as any).__PRELOADED_STATE__;
}

export const store = configureStore({
  reducer: {
    requestAuth: requestAuthReducer,
    requestBody: requestBodyReducer,
    requestHeader: requestHeaderReducer,
    requestMethod: requestMethodReducer,
    requestUrl: requestUrlReducer,
    response: responseReducer,
    codeGenOptions: codeGenOptionsReducer,
  },
  preloadedState,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
