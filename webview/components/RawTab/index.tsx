import * as React from "react";
import * as propTypes from "prop-types";
import { Editor } from "../../shared/Editor";
import "./styles.css";

export const Raw = (props) => {
  const { raw, setRaw, language } = props;
  return (
    <div className="raw-wrapper">
      <Editor
        className="raw-editor"
        value={raw}
        language={language}
        onChange={setRaw}
      />
    </div>
  );
};

Raw.propTypes = {
  raw: propTypes.string.isRequired,
  setRaw: propTypes.func.isRequired,
  language: propTypes.string.isRequired,
};
