import * as React from "react";
import * as propTypes from "prop-types";
import Editor from "@monaco-editor/react";
import "./styles.css";

export const Response = (props) => {
  const { response } = props;
  console.log("in app", response);
  return (
    <div className="response-window">
      <Editor
        height="100%"
        language="HTML"
        theme="vs-dark"
        value={response.data}
      ></Editor>
    </div>
  );
};

Response.propTypes = {
  response: propTypes.object.isRequired,
};
