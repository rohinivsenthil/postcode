import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export const requestAuthTypes = [
  { name: "No Auth", value: "noauth" },
  { name: "Bearer Token", value: "bearer" },
  { name: "Basic Auth", value: "basic" },
];

export interface BearerAuthOptions {
  token: string;
}

export interface BasicAuthOptions {
  username: string;
  password: string;
}

export interface RequestAuthState {
  type: string;
  bearer: BearerAuthOptions;
  basic: BasicAuthOptions;
}

const initialState: RequestAuthState = {
  type: "noauth",
  bearer: { token: "" },
  basic: { username: "", password: "" },
};

const requestAuthSlice = createSlice({
  name: "requestAuth",
  initialState,
  reducers: {
    requestAuthTypeUpdated(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },
    requestAuthOptionsUpdated(
      state,
      action: PayloadAction<BearerAuthOptions | BasicAuthOptions>
    ) {
      state[state.type] = action.payload;
    },
  },
});

export const { requestAuthTypeUpdated, requestAuthOptionsUpdated } =
  requestAuthSlice.actions;

export const selectRequestAuth = (state: RootState) => state.requestAuth;
export const selectRequestAuthType = (state: RootState) =>
  state.requestAuth.type;
export const selectBearerAuthOptions = (state: RootState) =>
  state.requestAuth.bearer;
export const selectBasicAuthOptions = (state: RootState) =>
  state.requestAuth.basic;

export default requestAuthSlice.reducer;
