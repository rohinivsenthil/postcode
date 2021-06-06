import * as React from "react";
import "./styles.css";
import { Editor } from "../../../shared/Editor";
import { codeGenOptions } from "../codeGenSlice";

export const CodeSnippet = () => {
  const [code, setCode] = React.useState("");

  return (
    <div className="code-gen-wrapper">
      <div className="code-gen-option">
        <select
          // onChange={(e) => dispatch(requestAuthTypeUpdated(e.target.value))}
          className="select-code-option"
          // value={requestAuthType}
        >
          {codeGenOptions.flatMap(({ language, variants }) =>
            variants.map((variant) => (
              // eslint-disable-next-line react/jsx-key
              <option value={`${language} - ${variant}`}>
                {`${language} - ${variant}`}
              </option>
            ))
          )}
        </select>
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
