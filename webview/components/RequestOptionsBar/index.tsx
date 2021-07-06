import * as React from "react";
import "./styles.css";
import * as propTypes from "prop-types";
import { requestOptions } from "../../constants/request-options";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectRequestHeaders } from "../../features/requestHeader/requestHeaderSlice";
import {
  requestBodyRawFormatUpdated,
  selectRequestBodyMode,
  selectRequestBodyRawLanguage,
} from "../../features/requestBody/requestBodySlice";

export const RequestOptionsTab = (props) => {
  const { selected, setSelected } = props;
  const dispatch = useAppDispatch();
  const header = useAppSelector(selectRequestHeaders);
  const bodyMode = useAppSelector(selectRequestBodyMode);
  const language = useAppSelector(selectRequestBodyRawLanguage);
  const hideBeautifyButton = bodyMode === "raw" && language === "json";
  return (
    <div className="request-options-tab-wrapper">
      <div className="request-options-left">
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
      <div className="request-options-right">
        <button
          id="request-code"
          name="request-code"
          className="button-request"
          onClick={() => setSelected("code")}
        >
          Code
        </button>
        <button
          id="request-beautify"
          name="request-beautify"
          className={
            hideBeautifyButton ? "button-request" : "button-request hidden"
          }
          onClick={() => {
            dispatch(requestBodyRawFormatUpdated(true));
          }}
        >
          Beautify
        </button>
      </div>
    </div>
  );
};

RequestOptionsTab.propTypes = {
  selected: propTypes.string.isRequired,
  setSelected: propTypes.func.isRequired,
};
