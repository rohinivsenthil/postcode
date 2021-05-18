import * as React from "react";
import * as propTypes from "prop-types";
import Editor from "@monaco-editor/react";
import "./styles.css";
import { responseViews } from "../../constants/response-views";

export const Response = (props) => {
  const { response } = props;
  return (
    <div className="response-window">
      <div className="response-header">
        <div className="response-view-options">
          <div>
            {responseViews.map((type) => (
              <button className="button-response-view" key={type.value}>
                {type.name}
              </button>
            ))}
          </div>
          <div>Dropdown</div>
        </div>
        <div className="response-status">
          <div>Status: {`${response.status} ${response.statusText}`}</div>
        </div>
      </div>
      <Editor
        height="60%"
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
