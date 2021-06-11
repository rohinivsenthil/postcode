/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import "./styles.css";
import { RequestBar } from "../../components/RequestBar";
import { RequestOptionsTab } from "../../components/RequestOptionsBar";
import { RequestOptionsWindow } from "../../components/RequestOptionsWindow";
import { Response } from "../../components/Response";
import { requestOptions } from "../../constants/request-options";

export const Postcode = () => {
  const [selectedOption, setSelectedOption] = React.useState(
    requestOptions[0].value
  );

  return (
    <div className="request-wrapper">
      <RequestBar />
      <div className="request-options-wrapper">
        <RequestOptionsTab
          selected={selectedOption}
          setSelected={setSelectedOption}
        />
        <RequestOptionsWindow selected={selectedOption} />
      </div>
      <div className="response-wrapper">
        <Response />
      </div>
    </div>
  );
};
