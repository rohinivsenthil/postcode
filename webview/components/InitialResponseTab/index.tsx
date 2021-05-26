import * as React from "react";
import "./styles.css";
import packageIcon from "../../icons/package.svg";

export const InitialResponse = () => {
  return (
    <div className="initial-response-wrapper">
      <div>Hit Send to get a response</div>
      <img
        src={packageIcon}
        height="30%"
        width="30%"
        className="img-initial-response"
      />
    </div>
  );
};
