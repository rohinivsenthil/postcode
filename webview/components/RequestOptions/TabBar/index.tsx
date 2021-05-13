/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import "./styles.css";
import * as propTypes from "prop-types";
import * as requestOptions from "../../../constants/request-options.json";

export const TabBar = (props) => {
  const { selected, setSelected } = props;
  return (
    <div className="request-options">
      {requestOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => setSelected(option.value)}
          className={
            selected === option.value
              ? "request-option request-option-selected"
              : "request-option"
          }
        >
          {option.name}
        </button>
      ))}
    </div>
  );
};

TabBar.propTypes = {
  selected: propTypes.string.isRequired,
  setSelected: propTypes.func.isRequired,
};
