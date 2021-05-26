import * as React from "react";
import "./styles.css";

export const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div>Sending request ...</div>
      <div className="loader" />
    </div>
  );
};
