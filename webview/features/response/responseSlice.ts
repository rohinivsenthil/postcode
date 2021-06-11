import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export interface ResponseState {
  status?: number;
  statusText?: string;
  data?: string;
  initial: boolean;
  error?: Error;
  loading?: boolean;
  headers?: { key: string; value: string }[];
}

const initialState: ResponseState = { initial: true };

const responseSlice = createSlice({
  name: "response",
  initialState,
  reducers: {
    responseUpdated(state, action: PayloadAction<any>) {
      return {
        ...action.payload,
        headers:
          action.payload.headers &&
          Object.entries(action.payload.headers).map(([key, value]) => ({
            key,
            value,
          })),
        initial: false,
        loading: false,
      };
    },
    responseLoadingStarted(state) {
      state.loading = true;
    },
  },
});

export const { responseUpdated, responseLoadingStarted } =
  responseSlice.actions;

export const selectResponse = (state: RootState) => state.response;
export const selectResponseHeaders = (state: RootState) =>
  state.response.headers;

export default responseSlice.reducer;
