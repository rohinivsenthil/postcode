import * as React from "react";
import "./styles.css";
import { ReactComponent as PackageIcon } from "../../../icons/package.svg";
import { useAppSelector } from "../../../redux/hooks";
import { selectResponse } from "../responseSlice";

export const ErrorResponse = () => {
  const response = useAppSelector(selectResponse);
  return (
    <div className="error-response-wrapper">
      <div>Could not send request</div>
      <div className="error-message">{`Error: ${response.error.message}`}</div>
      <PackageIcon className="img-error-response" />
    </div>
  );
};
