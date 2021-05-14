import * as React from "react";
import "./styles.css";
import { RequestBar } from "../RequestBar";
import { RequestOptionsTab } from "../RequestOptions/TabBar";
import { RequestOptionsWindow } from "../RequestOptions/TabWindow";
import { requestOptions } from "../../constants/request-options";
import { defaultHeaders } from "../../constants/default-headers";
import { defaultReqBody } from "../../constants/default-req-body";

export const Request = () => {
  const [selectedOption, setSelectedOption] = React.useState(
    requestOptions[0].value
  );
  const [params, setParams] = React.useState([{}]);
  const [headers, setHeaders] = React.useState(defaultHeaders);
  const [body, setBody] = React.useState(defaultReqBody);
  return (
    <div className="request-wrapper">
      <RequestBar />
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
          body={body}
          setBody={setBody}
        />
      </div>
    </div>
  );
};
