import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export const requestMethods = [
  { name: "GET", value: "get" },
  { name: "POST", value: "post" },
  { name: "PUT", value: "put" },
  { name: "PATCH", value: "patch" },
  { name: "DELETE", value: "delete" },
  { name: "OPTIONS", value: "options" },
  { name: "HEAD", value: "head" },
];

export interface RequestMethodState {
  value: string;
}

const initialState: RequestMethodState = { value: "get" };

const requestMethodSlice = createSlice({
  name: "requestMethod",
  initialState,
  reducers: {
    requestMethodUpdated(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { requestMethodUpdated } = requestMethodSlice.actions;

export const selectRequestMethod = (state: RootState) =>
  state.requestMethod.value;

export default requestMethodSlice.reducer;
