import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

interface Header {
  key: string;
  value: string;
  description: string;
  disabled: boolean;
}

const initialState: Header[] = [];

const requestHeaderSlice = createSlice({
  name: "requestHeader",
  initialState,
  reducers: {
    requestHeaderUpdated(state, action: PayloadAction<any>) {
      state[action.payload.idx] = action.payload.value;
    },
    requestHeaderAdded(state, action: PayloadAction<Header>) {
      state.push(action.payload);
    },
    requestHeaderDeleted(state, action: PayloadAction<number>) {
      state.splice(action.payload, 1);
    },
  },
});

export const {
  requestHeaderAdded,
  requestHeaderUpdated,
  requestHeaderDeleted,
} = requestHeaderSlice.actions;

export const selectRequestHeaders = (state: RootState) => state.requestHeader;

export default requestHeaderSlice.reducer;
