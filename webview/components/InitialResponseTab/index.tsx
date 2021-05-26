import * as React from "react";
import "./styles.css";
import { ReactComponent as PackageIcon } from "../../icons/package.svg";

export const InitialResponse = () => {
  return (
    <div className="initial-response-wrapper">
      <div>Hit Send to get a response</div>
      <PackageIcon className="img-initial-response" />
    </div>
  );
};
