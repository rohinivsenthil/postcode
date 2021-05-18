import * as React from "react";
import "./styles.css";
import { RequestBar } from "../RequestBar";
import { RequestOptionsTab } from "../RequestOptions/TabBar";
import { RequestOptionsWindow } from "../RequestOptions/TabWindow";
import { requestOptions } from "../../constants/request-options";
import { requestTypes } from "../../constants/request-types";
import { defaultHeaders } from "../../constants/default-headers";
import { authTypes } from "../../constants/auth-types";

export const Request = () => {
  const [selectedOption, setSelectedOption] = React.useState(
    requestOptions[0].value
  );
  const [reqType, setReqType] = React.useState(requestTypes[0].value);
  const [params, setParams] = React.useState([{}]);
  const [headers, setHeaders] = React.useState(defaultHeaders);
  const [body, setBody] = React.useState("");
  const [auth, setAuth] = React.useState({ selected: authTypes[0].value });
  return (
    <div className="request-wrapper">
      <RequestBar setReqType={setReqType} />
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
      <div className="response-wrapper"></div>
    </div>
  );
};
