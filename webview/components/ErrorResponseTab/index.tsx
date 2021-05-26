import * as React from "react";
import "./styles.css";
import { ReactComponent as PackageIcon } from "../../icons/package.svg";
import * as propTypes from "prop-types";

export const ErrorResponse = (props) => {
  const { response } = props;
  return (
    <div className="error-response-wrapper">
      <div>Could not send request</div>
      <div className="error-message">{`Error: ${response.error.message}`}</div>
      <PackageIcon className="img-error-response" />
    </div>
  );
};

ErrorResponse.propTypes = {
  response: propTypes.object.isRequired,
};
