import * as React from "react";
import "./styles.css";
import * as propTypes from "prop-types";
import { requestOptions } from "../../../constants/request-options";

export const RequestOptionsTab = (props) => {
  const { selected, setSelected, headers } = props;
  return (
    <div className="request-options-tab-wrapper">
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
            {option.value === "headers" ? (
              <div className="request-options-header-length">
                (
                {
                  headers.filter(({ key, value, desc }) => key || value || desc)
                    .length
                }
                )
              </div>
            ) : null}
          </button>
        ))}
      </div>
      {/* <button
        id="request-code"
        name="request-code"
        className="button-request-code"
      >
        Code
      </button> */}
    </div>
  );
};

RequestOptionsTab.propTypes = {
  selected: propTypes.string.isRequired,
  setSelected: propTypes.func.isRequired,
  headers: propTypes.array.isRequired,
};
