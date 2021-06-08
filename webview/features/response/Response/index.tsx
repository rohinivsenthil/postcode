import * as React from "react";
import "./styles.css";
import { responseViews } from "../../../constants/response-views";
import { supportedLangs } from "../../../constants/supported-langs";
import { Default } from "../Default";
import { ErrorResponse } from "../ErrorResponse";
import { useAppSelector } from "../../../redux/hooks";
import { selectResponse } from "../responseSlice";

const Editor = React.lazy(() => import("../../../shared/Editor"));

export const Response = () => {
  const response = useAppSelector(selectResponse);
  const [view, setView] = React.useState(responseViews[0].value);
  const [language, setLanguage] = React.useState(supportedLangs[0].value);

  if (response.loading) {
    return (
      <div className="loader-wrapper">
        <div>Sending request ...</div>
        <div className="loader" />
      </div>
    );
  } else if (response.initial) {
    return <Default />;
  } else if (response.error) {
    return <ErrorResponse />;
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
        <React.Suspense fallback={<div>loading</div>}>
          <Editor
            className="response-editor"
            value={response.data || ""}
            language={view === "raw" ? "text" : language}
            readOnly
            copyButton
            format
          />
        </React.Suspense>
      </div>
    );
  }
};
