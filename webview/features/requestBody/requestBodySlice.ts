import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export const requestBodyModes = [
  { name: "none", value: "none" },
  { name: "form-data", value: "form-data" },
  { name: "x-www-form-urlencoded", value: "x-www-form-urlencoded" },
  { name: "raw", value: "raw" },
  { name: "binary", value: "binary" },
];

export const requestBodyRawLanguages = [
  { name: "JSON", value: "json" },
  { name: "HTML", value: "html" },
  { name: "XML", value: "xml" },
  { name: "Text", value: "text" },
];

export interface RequestBodyState {
  mode?: string;
  disabled: boolean;
  raw: string;
  file: string;
  fileData: string;
  formdata: { key: string; value: string; description: string }[];
  urlencoded: { key: string; value: string; description: string }[];
  options: any;
}

const initialState: RequestBodyState = {
  disabled: true,
  raw: "",
  file: "",
  fileData: "",
  formdata: [],
  urlencoded: [],
  options: { raw: { language: "json" } },
};

const requestBodySlice = createSlice({
  name: "requestBody",
  initialState,
  reducers: {
    requestBodyFormDataItemAdded(state, action: PayloadAction<any>) {
      state.formdata.push(action.payload);
    },
    requestBodyFormDataItemDeleted(state, action: PayloadAction<number>) {
      state.formdata.splice(action.payload, 1);
    },
    requestBodyFormDataItemUpdated(state, action: PayloadAction<any>) {
      state.formdata[action.payload.idx] = action.payload.value;
    },
    requestBodyUrlEncodedItemAdded(state, action: PayloadAction<any>) {
      state.urlencoded.push(action.payload);
    },
    requestBodyUrlEncodedItemDeleted(state, action: PayloadAction<number>) {
      state.urlencoded.splice(action.payload, 1);
    },
    requestBodyUrlEncodedItemUpdated(state, action: PayloadAction<any>) {
      state.urlencoded[action.payload.idx] = action.payload.value;
    },
    requestBodyRawUpdated(state, action: PayloadAction<string>) {
      state.raw = action.payload;
    },
    requestBodyRawLanguageUpdated(state, action: PayloadAction<string>) {
      state.options.raw.language = action.payload;
    },
    requestBodyBinaryUpdated(state, action: PayloadAction<any>) {
      state.file = action.payload.name;
      state.fileData = action.payload.data;
    },
    requestBodyModeUpdated(state, action: PayloadAction<string>) {
      if (action.payload === "none") {
        state.mode = undefined;
        state.disabled = true;
      } else {
        state.mode = action.payload;
      }
    },
  },
});

export const {
  requestBodyBinaryUpdated,
  requestBodyFormDataItemAdded,
  requestBodyFormDataItemDeleted,
  requestBodyFormDataItemUpdated,
  requestBodyModeUpdated,
  requestBodyRawUpdated,
  requestBodyRawLanguageUpdated,
  requestBodyUrlEncodedItemAdded,
  requestBodyUrlEncodedItemDeleted,
  requestBodyUrlEncodedItemUpdated,
} = requestBodySlice.actions;

export const selectRequestBody = (state: RootState) => state.requestBody;
export const selectRequestBodyMode = (state: RootState) =>
  state.requestBody.mode || "none";
export const selectRequestBodyRaw = (state: RootState) => state.requestBody.raw;
export const selectRequestBodyRawLanguage = (state: RootState) =>
  state.requestBody.options.raw.language;
export const selectRequestBodyFile = (state: RootState) =>
  state.requestBody.file;
export const selectRequestBodyFileData = (state: RootState) =>
  state.requestBody.fileData;
export const selectRequestBodyFormData = (state: RootState) =>
  state.requestBody.formdata;
export const selectRequestBodyUrlEncoded = (state: RootState) =>
  state.requestBody.urlencoded;

export default requestBodySlice.reducer;
