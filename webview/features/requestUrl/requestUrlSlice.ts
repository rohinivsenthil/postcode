import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { Url } from "postman-collection";

interface QueryParam {
  key: string;
  value: string;
  description: string;
  disabled: boolean;
}

interface Variable {
  key: string;
  value: string;
  description: string;
}

export interface RequestUrlState {
  auth?: string;
  hash?: string;
  host?: string[];
  path?: string[];
  port?: string;
  protocol?: string;
  query: QueryParam[];
  variables: Variable[];
}

const initialState: RequestUrlState = {
  query: [],
  variables: [],
};

const requestUrlSlice = createSlice({
  name: "requestUrl",
  initialState,
  reducers: {
    requestUrlUpdated(state, action: PayloadAction<string>) {
      const { query, ...other } = Url.parse(action.payload);
      return {
        ...other,
        query: [
          ...state.query.filter(({ disabled }) => disabled),
          ...(query || []),
        ],
      };
    },
    requestQueryParamAdded(state, action: PayloadAction<QueryParam>) {
      state.query.push(action.payload);
    },
    requestQueryParamUpdated(state, action: PayloadAction<any>) {
      state.query[action.payload.idx] = action.payload.value;
    },
    requestQueryParamDeleted(state, action: PayloadAction<number>) {
      state.query.splice(action.payload, 1);
    },
    // requestUrlVariableUpdated(state, action: PayloadAction<Variable>) {},
  },
});

export const {
  requestUrlUpdated,
  requestQueryParamAdded,
  requestQueryParamUpdated,
  requestQueryParamDeleted,
  // requestUrlVariableUpdated,
} = requestUrlSlice.actions;

export const selectRequestUrl = (state: RootState) =>
  new Url(state.requestUrl).toString();
export const selectRequestQueryParams = (state: RootState) =>
  state.requestUrl.query;
export const selectRequestVariables = (state: RootState) =>
  state.requestUrl.variables;

export default requestUrlSlice.reducer;
