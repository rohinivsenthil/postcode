import * as React from "react";
import "./styles.css";
import { useAppSelector } from "../../../redux/hooks";
import { selectResponse } from "../responseSlice";
import * as propTypes from "prop-types";

const Editor = React.lazy(() => import("../../../shared/Editor"));

export const ResponseBody = (props) => {
  const { language } = props;
  const response = useAppSelector(selectResponse);

  return (
    <div className="response-window">
      <React.Suspense fallback={<div>loading</div>}>
        <Editor
          automaticLayout={true}
          className="response-editor"
          value={response.data || ""}
          language={language}
          readOnly
          copyButton
          format
        />
      </React.Suspense>
    </div>
  );
};

ResponseBody.propTypes = {
  language: propTypes.string.isRequired,
};
