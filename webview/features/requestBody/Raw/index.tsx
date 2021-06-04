import * as React from "react";
import { Editor } from "../../../shared/Editor";
import "./styles.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  requestBodyRawUpdated,
  selectRequestBodyRaw,
  selectRequestBodyRawLanguage,
} from "../requestBodySlice";

export const Raw = () => {
  const raw = useAppSelector(selectRequestBodyRaw);
  const language = useAppSelector(selectRequestBodyRawLanguage);
  const dispatch = useAppDispatch();

  return (
    <div className="raw-wrapper">
      <Editor
        className="raw-editor"
        value={raw}
        language={language}
        onChange={(data) => dispatch(requestBodyRawUpdated(data))}
      />
    </div>
  );
};
