import * as React from "react";
import * as propTypes from "prop-types";
import { Editor } from "../../shared/Editor";
import "./styles.css";
import { responseViews } from "../../constants/response-views";
import { supportedLangs } from "../../constants/supported-langs";
import { InitialResponse } from "./tabs/InitialResponse";
import { ErrorResponse } from "./tabs/ErrorResponse";
import { Loader } from "../../shared/Loader";

export const Response = (props) => {
  const { response, loadingResponse } = props;
  const [view, setView] = React.useState(responseViews[0].value);
  const [language, setLanguage] = React.useState(supportedLangs[0].value);

  if (loadingResponse) {
    return <Loader />;
  } else if (response.initial) {
    return <InitialResponse />;
  } else if (response.error) {
    return <ErrorResponse response={response} />;
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
            {view === "pretty" && (
              <select
                onChange={(e) => setLanguage(e.target.value)}
                className="select-res-lang"
                value={language}
              >
                {supportedLangs.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.name}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="response-status">
            <div>Status:</div>
            <div className="text-response-status">{`${response.status} ${response.statusText}`}</div>
          </div>
        </div>
        <Editor
          className="response-editor"
          value={response.data || ""}
          language={view === "raw" ? "text" : language}
          readOnly={true}
        />
      </div>
    );
  }
};

Response.propTypes = {
  response: propTypes.object.isRequired,
  loadingResponse: propTypes.bool.isRequired,
};
