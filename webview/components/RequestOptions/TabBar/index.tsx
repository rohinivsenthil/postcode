/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import "./styles.css";
import { requestOptions } from "../../../constants/request-options";

export const TabBar = () => {
  const [selected, setSelected] = React.useState(requestOptions[0].value);
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
