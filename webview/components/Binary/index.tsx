import * as React from "react";
import * as propTypes from "prop-types";
import "./styles.css";

export const Binary = (props) => {
  const { binary, setBinary } = props;

  return (
    <div className="binary-wrapper">
      <div className="input-file-wrapper">
        <input
          type="file"
          id="myFile"
          name="filename"
          className="input-file-upload"
          onChange={(e) => {
            if (e.target.files.length) {
              setBinary(e.target.files[0]);
            }
          }}
        ></input>
        <label className="label-file-upload" htmlFor="myFile">
          Select file
        </label>
        <div>{binary.name}</div>
      </div>
    </div>
  );
};

Binary.propTypes = {
  binary: propTypes.any.isRequired,
  setBinary: propTypes.any.isRequired,
};
