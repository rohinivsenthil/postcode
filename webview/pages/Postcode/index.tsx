/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import "./styles.css";
import vscode from "../../vscode";
import { RequestBar } from "../../components/RequestBar";
import { RequestOptionsTab } from "../../components/RequestOptionsBar";
import { RequestOptionsWindow } from "../../components/RequestOptionsWindow";
import { Response } from "../../features/response/Response";
import { requestOptions } from "../../constants/request-options";
import { defaultHeaders } from "../../constants/default-headers";
import { supportedLangs } from "../../constants/supported-langs";
import { bodyTypes } from "../../constants/body-types";
import { useAppSelector } from "../../redux/hooks";
import { selectRequestMethod } from "../../features/requestMethod/requestMethodSlice";
import { selectRequestAuth } from "../../features/requestAuth/requestAuthSlice";

export const Postcode = () => {
  const [selectedOption, setSelectedOption] = React.useState(
    requestOptions[0].value
  );

  const reqType = useAppSelector(selectRequestMethod);
  const auth = useAppSelector(selectRequestAuth);
  const [requestUrl, setRequestUrl] = React.useState("");
  const [headers, setHeaders] = React.useState(defaultHeaders);
  const [body, setBody] = React.useState("");
  const [raw, setRaw] = React.useState("");
  const [selectedBodyType, setSelectedBodyType] = React.useState(
    bodyTypes[0].value
  );
  const [rawLanguage, setRawLanguage] = React.useState(supportedLangs[0].value);

  return (
    <div className="request-wrapper">
      <RequestBar
        requestUrl={requestUrl}
        setRequestUrl={setRequestUrl}
        sendRequest={() =>
          vscode.postMessage({
            reqType,
            requestUrl,
            headers,
            body,
            auth,
            selectedBodyType,
            rawLanguage,
          })
        }
      />
      <div className="request-options-wrapper">
        <RequestOptionsTab
          selected={selectedOption}
          setSelected={setSelectedOption}
          headers={headers}
        />
        <RequestOptionsWindow
          selected={selectedOption}
          raw={raw}
          setRaw={setRaw}
          selectedBodyType={selectedBodyType}
          setSelectedBodyType={setSelectedBodyType}
          rawLanguage={rawLanguage}
          setRawLanguage={setRawLanguage}
        />
      </div>
      <div className="response-wrapper">
        <Response />
      </div>
    </div>
  );
};
