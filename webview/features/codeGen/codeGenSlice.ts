import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export const codeGenOptions = [
  { language: "C", variants: ["libcurl"], editor: "c" },
  { language: "C#", variants: ["RestSharp"], editor: "csharp" },
  { language: "cURL", variants: ["cURL"], editor: "bash" },
  { language: "Dart", variants: ["http"], editor: "dart" },
  { language: "Go", variants: ["Native"], editor: "go" },
  { language: "HTTP", variants: ["HTTP"], editor: "text" },
  { language: "Java", variants: ["OkHttp", "Unirest"], editor: "java" },
  {
    language: "JavaScript",
    variants: ["Fetch", "jQuery", "XHR"],
    editor: "javascript",
  },
  {
    language: "NodeJs",
    variants: ["Axios", "Native", "Request", "Unirest"],
    editor: "javascript",
  },
  {
    language: "Objective-C",
    variants: ["NSURLSession"],
    editor: "objective-c",
  },
  { language: "OCaml", variants: ["Cohttp"], editor: "text" },
  {
    language: "PHP",
    variants: ["cURL", "pecl_http", "HTTP_Request2"],
    editor: "php",
  },
  { language: "PowerShell", variants: ["RestMethod"], editor: "powershell" },
  {
    language: "Python",
    variants: ["http.client", "Requests"],
    editor: "python",
  },
  { language: "Ruby", variants: ["Net:HTTP"], editor: "ruby" },
  { language: "Shell", variants: ["Httpie", "wget"], editor: "shell" },
  { language: "Swift", variants: ["URLSession"], editor: "swift" },
];

export interface codeGenOptionState {
  language: string;
  variant: string;
  editor: string;
}

const initialState = { language: "C", variant: "libcurl", editor: "c" };

const codeGenSlice = createSlice({
  name: "codeGenOptions",
  initialState,
  reducers: {
    codeGenLanguageUpdated(state, action: PayloadAction<string>) {
      state.language = action.payload;
      state.editor = codeGenOptions.filter(
        ({ language }) => language === action.payload
      )[0].editor;
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
  state.codeGenOptions.editor;

export default codeGenSlice.reducer;
