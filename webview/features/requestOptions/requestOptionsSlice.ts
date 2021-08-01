import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export const requestOptionsList = [
    {
        name: "Strict SSL",
        value: "strictSSL",
        type: 'select',
        options: [
            { key: "yes", value: "Yes" },
            { key: "no", value: "No" }
        ],
        default: "Yes"
    }
]

export interface RequestOptions {
    strictSSL: boolean
}

const initialState = {
    strictSSL: true
};

const requestOptionsSlice = createSlice({
    name: "requestOptions",
    initialState,
    reducers: {
        requestOptionsUpdated(_, action: PayloadAction<RequestOptions>) {
            return action.payload;
        },
    },
});

export const { requestOptionsUpdated } = requestOptionsSlice.actions;

export const selectRequestOptions = (state: RootState) => state.requestOptions;

export default requestOptionsSlice.reducer;
