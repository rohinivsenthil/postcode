import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import requestAuthReducer from "../features/requestAuth/requestAuthSlice";
import requestBodyReducer from "../features/requestBody/requestBodySlice";
import requestHeaderReducer from "../features/requestHeader/requestHeaderSlice";
import requestMethodReducer from "../features/requestMethod/requestMethodSlice";
import requestUrlReducer from "../features/requestUrl/requestUrlSlice";
import responseReducer from "../features/response/responseSlice";

export const store = configureStore({
  reducer: {
    requestAuth: requestAuthReducer,
    requestBody: requestBodyReducer,
    requestHeader: requestHeaderReducer,
    requestMethod: requestMethodReducer,
    requestUrl: requestUrlReducer,
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
