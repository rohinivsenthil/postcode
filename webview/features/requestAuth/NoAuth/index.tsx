import * as React from "react";
import "./styles.css";

export const NoAuth = () => {
  return (
    <div className="no-auth-wrapper">
      <div className="none-prompt">
        This request does not use any authorization.
      </div>
    </div>
  );
};
