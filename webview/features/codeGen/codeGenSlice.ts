import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export const codeGenOptions = [
  { language: "C", variants: ["libcurl"] },
  { language: "C#", variants: ["RestSharp"] },
  { language: "cURL", variants: ["cURL"] },
  { language: "Dart", variants: ["http"] },
  { language: "Go", variants: ["Native"] },
  { language: "HTTP", variants: ["HTTP"] },
  { language: "Java", variants: ["OkHttp", "Unirest"] },
  { language: "JavaScript", variants: ["Fetch", "jQuery", "XHR"] },
  { language: "NodeJs", variants: ["Axios", "Native", "Request", "Unirest"] },
  { language: "Objective-C", variants: ["NSURLSession"] },
  { language: "OCaml", variants: ["Cohttp"] },
  { language: "PHP", variants: ["cURL", "pecl_http", "HTTP_Request2"] },
  { language: "PowerShell", variants: ["RestMethod"] },
  { language: "Python", variants: ["http.client", "Requests"] },
  { language: "Ruby", variants: ["Net:HTTP"] },
  { language: "Shell", variants: ["Httpie", "wget"] },
  { language: "Swift", variants: ["URLSession"] },
];

export interface codeGenOptionState {
  language: string;
  variant: string;
}

const initialState = { language: "C", variant: "libcurl" };

const codeGenSlice = createSlice({
  name: "codeGenOptions",
  initialState,
  reducers: {
    codeGenOptionsUpdated(state, action: PayloadAction<codeGenOptionState>) {
      return action.payload;
    },
  },
});

export const { codeGenOptionsUpdated } = codeGenSlice.actions;

export const selectGodeGenOptions = (state: RootState) => state.codeGenOptions;

export default codeGenSlice.reducer;
