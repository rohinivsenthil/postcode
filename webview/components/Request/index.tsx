import * as React from "react";
import "./styles.css";
import { RequestBar } from "../RequestBar";
import { TabBar as RequestOptionsTab } from "../RequestOptions/TabBar";
import { TabWindow as RequestOptionsWindow } from "../RequestOptions/TabWindow";
import { requestOptions } from "../../constants/request-options";
import { defaultHeaders } from "../../constants/default-headers";

export const Request = () => {
  const [selectedOption, setSelectedOption] = React.useState(
    requestOptions[0].value
  );
  const [headers, setHeaders] = React.useState(defaultHeaders);
  return (
    <div className="request-wrapper">
      <RequestBar />
      <RequestOptionsTab
        selected={selectedOption}
        setSelected={setSelectedOption}
        headers={headers}
      />
      <RequestOptionsWindow
        selected={selectedOption}
        headers={headers}
        setHeaders={setHeaders}
      />
    </div>
  );
};
