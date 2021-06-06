import * as React from "react";
import { RequestQueryParams } from "../../features/requestUrl/RequestQueryParams";
import { RequestAuth } from "../../features/requestAuth/RequestAuth";
import { Body } from "../../features/requestBody/RequestBody";
import { Headers } from "../../features/requestHeader/HeadersWindow";
import { CodeSnippet } from "../../features/codeGen/CodeSnippet";
import * as propTypes from "prop-types";
import "./styles.css";

export const RequestOptionsWindow = (props) => {
  const { selected } = props;
  return (
    <div className="request-options-window-wrapper">
      {selected === "params" ? (
        <RequestQueryParams />
      ) : selected === "authorization" ? (
        <RequestAuth />
      ) : selected === "body" ? (
        <Body />
      ) : selected === "headers" ? (
        <Headers />
      ) : selected === "code" ? (
        <CodeSnippet />
      ) : null}
    </div>
  );
};

RequestOptionsWindow.propTypes = {
  selected: propTypes.string.isRequired,
};
