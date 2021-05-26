/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import * as propTypes from "prop-types";
import "./styles.css";
import vscode from "../../vscode";
import { RequestBar } from "../RequestBar";
import { RequestOptionsTab } from "../RequestOptions/TabBar";
import { RequestOptionsWindow } from "../RequestOptions/TabWindow";
import { Response } from "../Response";
import { requestOptions } from "../../constants/request-options";
import { requestTypes } from "../../constants/request-types";
import { defaultHeaders } from "../../constants/default-headers";
import { authTypes } from "../../constants/auth-types";

const sendRequest = (reqType, requestUrl, headers, body, auth) => {
  vscode.postMessage({ reqType, requestUrl, headers, body, auth });
};

export const Request = (props) => {
  const { response, loadingResponse, setLoadingResponse } = props;
  const [selectedOption, setSelectedOption] = React.useState(
    requestOptions[0].value
  );
  const [requestUrl, setRequestUrl] = React.useState("");
  const [reqType, setReqType] = React.useState(requestTypes[0].value);
  const [params, setParams]: any = React.useState([{}]);
  const [headers, setHeaders] = React.useState(defaultHeaders);
  const [body, setBody] = React.useState("");
  const [auth, setAuth] = React.useState({ selected: authTypes[0].value });

  React.useEffect(() => {
    let index = requestUrl.indexOf("?");
    index = index == -1 ? requestUrl.length : index;

    const searchParams = new URLSearchParams(
      params
        .filter(({ checked }) => checked)
        .map(({ key, value }) => [key || "", value || ""])
    ).toString();

    setRequestUrl(
      requestUrl.slice(0, index) + (searchParams ? `?${searchParams}` : "")
    );
  }, [params]);

  return (
    <div className="request-wrapper">
      <RequestBar
        setLoadingResponse={setLoadingResponse}
        requestUrl={requestUrl}
        setRequestUrl={setRequestUrl}
        setReqType={setReqType}
        sendRequest={() =>
          sendRequest(reqType, requestUrl, headers, body, auth)
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
          headers={headers}
          setHeaders={setHeaders}
          params={params}
          setParams={setParams}
          setBody={setBody}
          auth={auth}
          setAuth={setAuth}
        />
      </div>
      <div className="response-wrapper">
        <Response response={response} loadingResponse={loadingResponse} />
      </div>
    </div>
  );
};

Request.propTypes = {
  response: propTypes.any.isRequired,
  loadingResponse: propTypes.bool.isRequired,
  setLoadingResponse: propTypes.func.isRequired,
};
