import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

interface Header {
  key: string;
  value: string;
  description: string;
  disabled: boolean;
}

const initialState: Header[] = [
  {
    key: "Cache-Control",
    value: "no-cache",
    description: "",
    disabled: false,
  },
  {
    key: "Accept",
    value: "*/*",
    description: "",
    disabled: false,
  },
  {
    key: "Accept-Encoding",
    value: "gzip, deflate",
    description: "",
    disabled: false,
  },
  {
    key: "Connection",
    value: "keep-alive",
    description: "",
    disabled: false,
  },
];

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
