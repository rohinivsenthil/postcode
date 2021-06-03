import * as React from "react";
import { RequestQueryParams } from "../../features/requestUrl/RequestQueryParams";
import { RequestAuth } from "../../features/requestAuth/RequestAuth";
import { Body } from "../../features/requestBody/RequestBody";
import { Headers } from "../../features/requestHeader/HeadersWindow";
import * as propTypes from "prop-types";
import "./styles.css";

export const RequestOptionsWindow = (props) => {
  const {
    selected,
    raw,
    setRaw,
    selectedBodyType,
    setSelectedBodyType,
    rawLanguage,
    setRawLanguage,
  } = props;
  return (
    <div className="request-options-window-wrapper">
      {selected === "params" ? (
        <RequestQueryParams />
      ) : selected === "authorization" ? (
        <RequestAuth />
      ) : selected === "body" ? (
        <Body
          raw={raw}
          setRaw={setRaw}
          selectedBodyType={selectedBodyType}
          setSelectedBodyType={setSelectedBodyType}
          rawLanguage={rawLanguage}
          setRawLanguage={setRawLanguage}
        />
      ) : selected === "headers" ? (
        <Headers />
      ) : null}
    </div>
  );
};

RequestOptionsWindow.propTypes = {
  selected: propTypes.string.isRequired,
  raw: propTypes.any.isRequired,
  setRaw: propTypes.any.isRequired,
  selectedBodyType: propTypes.any.isRequired,
  setSelectedBodyType: propTypes.any.isRequired,
  rawLanguage: propTypes.any.isRequired,
  setRawLanguage: propTypes.any.isRequired,
};
