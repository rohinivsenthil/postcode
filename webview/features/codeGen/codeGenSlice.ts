import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { Request } from "postman-collection";

export const codeGenOptions = [
  { language: "C", variants: ["libcurl"], editor: "c", key: "c" },
  { language: "C#", variants: ["RestSharp"], editor: "csharp", key: "csharp" },
  { language: "cURL", variants: ["cURL"], editor: "shell", key: "curl" },
  { language: "Dart", variants: ["http"], editor: "dart", key: "dart" },
  { language: "Go", variants: ["Native"], editor: "go", key: "go" },
  { language: "HTTP", variants: ["HTTP"], editor: "text", key: "http" },
  { language: "Java", variants: ["OkHttp", "Unirest"], editor: "java" },
  {
    language: "JavaScript",
    variants: ["Fetch", "jQuery", "XHR"],
    editor: "javascript",
    key: "javascript",
  },
  {
    language: "NodeJs",
    variants: ["Axios", "Native", "Request", "Unirest"],
    editor: "javascript",
    key: "nodejs",
  },
  {
    language: "Objective-C",
    variants: ["NSURLSession"],
    editor: "objective-c",
    key: "objective-c",
  },
  { language: "OCaml", variants: ["Cohttp"], editor: "text", key: "ocaml" },
  {
    language: "PHP",
    variants: ["cURL", "pecl_http", "HTTP_Request2"],
    editor: "php",
    key: "php",
  },
  {
    language: "PowerShell",
    variants: ["RestMethod"],
    editor: "powershell",
    key: "powershell",
  },
  {
    language: "Python",
    variants: ["http.client", "Requests"],
    editor: "python",
    key: "python",
  },
  { language: "Ruby", variants: ["Net:HTTP"], editor: "ruby", key: "ruby" },
  {
    language: "Shell",
    variants: ["Httpie", "wget"],
    editor: "shell",
    key: "shell",
  },
  {
    language: "Swift",
    variants: ["URLSession"],
    editor: "swift",
    key: "swift",
  },
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
    codeGenLanguageUpdated(state, action: PayloadAction<string>) {
      state.language = action.payload;
      state.variant = codeGenOptions.filter(
        ({ language }) => language === action.payload
      )[0].variants[0];
    },
    codeGenVariantUpdated(state, action: PayloadAction<string>) {
      state.variant = action.payload;
    },
  },
});

export const { codeGenLanguageUpdated, codeGenVariantUpdated } =
  codeGenSlice.actions;

export const selectCodeGenLanguage = (state: RootState) =>
  state.codeGenOptions.language;
export const selectCodeGenVariant = (state: RootState) =>
  state.codeGenOptions.variant;
export const selectCodeGenEditorLanguage = (state: RootState) =>
  codeGenOptions.filter(
    ({ language }) => language === state.codeGenOptions.language
  )[0].editor;
export const selectCodeGenLanguageKey = (state: RootState) =>
  codeGenOptions.filter(
    ({ language }) => language === state.codeGenOptions.language
  )[0].key;

export const selectRequest = (state: RootState) =>
  new Request({
    method: state.requestMethod,
    url: state.requestUrl,
    header: state.requestHeader,
    body: {
      mode: state.requestBody.mode,
      options: state.requestBody.options,
      [state.requestBody.mode]: state.requestBody[state.requestBody.mode],
    },
    auth: {
      type: state.requestAuth.type,
      [state.requestAuth.type]: state.requestAuth[state.requestAuth.type],
    },
  });

export default codeGenSlice.reducer;
