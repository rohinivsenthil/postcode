import * as React from "react";
import "./styles.css";

export const None = () => {
  return (
    <div className="none-wrapper">
      <div className="none-prompt">This request does not have a body</div>
    </div>
  );
};
