import * as React from "react";
import "./styles.css";
import * as propTypes from "prop-types";
import { requestOptions } from "../../constants/request-options";
import { useAppSelector } from "../../redux/hooks";
import { selectRequestHeaders } from "../../features/requestHeader/requestHeaderSlice";

export const RequestOptionsTab = (props) => {
  const { selected, setSelected } = props;
  const header = useAppSelector(selectRequestHeaders);

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
                  header.filter(
                    ({ key, value, description }) => key || value || description
                  ).length
                }
                )
              </div>
            ) : null}
          </button>
        ))}
      </div>
      <button
        id="request-code"
        name="request-code"
        className="button-request"
        onClick={() => setSelected("code")}
      >
        Code
      </button>
    </div>
  );
};

RequestOptionsTab.propTypes = {
  selected: propTypes.string.isRequired,
  setSelected: propTypes.func.isRequired,
};
