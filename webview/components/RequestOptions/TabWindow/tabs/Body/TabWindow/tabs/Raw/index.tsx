import * as React from "react";
import Editor from "@monaco-editor/react";
import "./styles.css";
import * as propTypes from "prop-types";

export const Raw = (props) => {
  const { raw, setRaw } = props;
  return (
    <div className="raw-wrapper">
      <Editor
        height="100%"
        // defaultLanguage="javascript"
        theme="vs-dark"
        value={raw}
        onChange={(value) => setRaw(value)}
      ></Editor>
    </div>
  );
};

Raw.propTypes = {
  raw: propTypes.string.isRequired,
  setRaw: propTypes.func.isRequired,
};
