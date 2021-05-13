/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import "./styles.css";
import { RequestBar } from "../RequestBar";
import { TabBar as RequestOptionsTab } from "../RequestOptions/TabBar";
import { TabWindow as RequestOptionsWindow } from "../RequestOptions/TabWindow";
import requestOptions from "../../constants/request-options.json";

export const Request = () => {
  const [selectedOption, setSelectedOption] = React.useState(
    requestOptions[0].value
  );
  return (
    <div className="request-wrapper">
      <RequestBar />
      <RequestOptionsTab
        selected={selectedOption}
        setSelected={setSelectedOption}
      />
      <RequestOptionsWindow selected={selectedOption} />
    </div>
  );
};
