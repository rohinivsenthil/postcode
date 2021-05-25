import * as React from "react";
import "./styles.css";
import packageIcon from "../../../../icons/package.svg";
import * as propTypes from "prop-types";

export const ErrorResponse = (props) => {
  const { response } = props;
  return (
    <div className="error-response-wrapper">
      <div>Could not send request</div>
      <img
        src={packageIcon}
        height="30%"
        width="30%"
        className="img-error-response"
      />
      <div className="error-message">{`Error: ${response.error.message}`}</div>
    </div>
  );
};

ErrorResponse.propTypes = {
  response: propTypes.object.isRequired,
};
