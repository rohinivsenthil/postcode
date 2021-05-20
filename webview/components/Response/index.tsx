import * as React from "react";
import * as propTypes from "prop-types";
import { Editor } from "../../shared/Editor";
import "./styles.css";
import { responseViews } from "../../constants/response-views";
import { supportedLangs } from "../../constants/supported-langs";

export const Response = (props) => {
  const { response } = props;
  const [view, setView] = React.useState(responseViews[0].value);
  if (response.error) {
    return <div>Error: {response.error.message}</div>;
  } else {
    return (
      <div className="response-window">
        <div className="response-header">
          <div className="response-view-options">
            <div>
              {responseViews.map((type) => (
                <button
                  className={
                    view === type.value
                      ? "button-response-view button-response-view-selected"
                      : "button-response-view"
                  }
                  key={type.value}
                  onClick={() => setView(type.value)}
                >
                  {type.name}
                </button>
              ))}
            </div>
            <select className="select-res-lang">
              {supportedLangs.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div className="response-status">
            <div>Status:</div>
            <div className="text-response-status">{`${response.status} ${response.statusText}`}</div>
          </div>
        </div>
        <Editor
          className="response-editor"
          value={response.data || ""}
          language="json"
          readOnly={true}
        />
      </div>
    );
  }
};

Response.propTypes = {
  response: propTypes.object.isRequired,
};
