import * as React from "react";
import "./styles.css";
import * as propTypes from "prop-types";
import { responseOptions } from "../../../constants/response-options";
import { supportedLangs } from "../../../constants/supported-langs";
import { useAppSelector } from "../../../redux/hooks";
import { selectResponse } from "../responseSlice";

export const ResponseTab = (props) => {
  const { selected, setSelected, language, setLanguage } = props;
  const response = useAppSelector(selectResponse);

  return (
    <div className="response-options-tab-wrapper">
      <div className="response-options">
        {responseOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setSelected(option.value)}
            className={
              selected === option.value
                ? "response-option response-option-selected"
                : "response-option"
            }
          >
            {option.name}
          </button>
        ))}
        {selected === "body" ? (
          <select
            onChange={(e) => setLanguage(e.target.value)}
            className="select-res-lang"
            value={language}
          >
            {supportedLangs.map((type) => (
              <option key={type.value} value={type.value}>
                {type.name}
              </option>
            ))}
          </select>
        ) : null}
      </div>
      <div className="response-status">
        <div>Status:</div>
        <div className="text-response-status">{`${response.status} ${response.statusText}`}</div>
      </div>
    </div>
  );
};

ResponseTab.propTypes = {
  selected: propTypes.string.isRequired,
  setSelected: propTypes.func.isRequired,
  language: propTypes.string.isRequired,
  setLanguage: propTypes.func.isRequired,
};
