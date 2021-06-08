import * as React from "react";
import "./styles.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  requestBodyRawUpdated,
  selectRequestBodyRaw,
  selectRequestBodyRawLanguage,
} from "../requestBodySlice";

const Editor = React.lazy(() => import("../../../shared/Editor"));

export const Raw = () => {
  const raw = useAppSelector(selectRequestBodyRaw);
  const language = useAppSelector(selectRequestBodyRawLanguage);
  const dispatch = useAppDispatch();

  return (
    <div className="raw-wrapper">
      <React.Suspense fallback={<div>loading</div>}>
        <Editor
          className="raw-editor"
          value={raw}
          language={language}
          onChange={(data) => dispatch(requestBodyRawUpdated(data))}
        />
      </React.Suspense>
    </div>
  );
};
