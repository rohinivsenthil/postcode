import * as React from "react";
import "./styles.css";
import { Editor } from "../../../shared/Editor";
import { codeGenOptions } from "../codeGenSlice";

export const CodeSnippet = () => {
  const [code, setCode] = React.useState("");

  const buttons = codeGenOptions.flatMap(({ language, variants }) =>
    variants.map((variant) => (
      // eslint-disable-next-line react/jsx-key
      <button className="option-button">{`${language} - ${variant}`}</button>
    ))
  );

  return (
    <div className="code-gen-wrapper">
      <div className="code-lang-wrapper">
        <div className="code-lang">{buttons}</div>
      </div>
      <div className="code-display">
        <Editor
          className="code-gen-editor"
          value={code}
          language="json"
          onChange={(data) => setCode(data)}
        />
      </div>
    </div>
  );
};
