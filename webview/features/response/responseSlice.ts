import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export interface ResponseState {
  status?: number;
  statusText?: string;
  data?: string;
  initial: boolean;
  error?: Error;
  loading?: boolean;
}

const initialState: ResponseState = { initial: true };

const responseSlice = createSlice({
  name: "response",
  initialState,
  reducers: {
    responseUpdated(state, action: PayloadAction<ResponseState>) {
      Object.assign(state, action.payload);
      state.initial = false;
      state.loading = false;
    },
    responseLoadingStarted(state) {
      state.loading = true;
    },
  },
});

export const { responseUpdated, responseLoadingStarted } =
  responseSlice.actions;

export const selectResponse = (state: RootState) => state.response;

export default responseSlice.reducer;
