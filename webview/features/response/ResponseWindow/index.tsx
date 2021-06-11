import * as React from "react";
import * as propTypes from "prop-types";
import "./styles.css";
import { ResponseBody } from "../ResponseBody";
import { ResponseHeaders } from "../ResponseHeaders";

export const ResponseWindow = (props) => {
  const { selected, language } = props;
  return (
    <div className="response-options-window-wrapper">
      {selected === "body" ? (
        <ResponseBody language={language} />
      ) : selected === "headers" ? (
        <ResponseHeaders />
      ) : null}
    </div>
  );
};

ResponseWindow.propTypes = {
  selected: propTypes.string.isRequired,
  language: propTypes.string.isRequired,
};
