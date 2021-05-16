import * as React from "react";
import "./styles.css";

export const Binary = () => {
  return (
    <div className="binary-wrapper">
      <input
        type="file"
        id="myFile"
        name="filename"
        className="input-file-upload"
      ></input>
    </div>
  );
};
