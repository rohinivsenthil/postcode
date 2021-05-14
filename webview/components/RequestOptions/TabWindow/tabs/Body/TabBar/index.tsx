import * as React from "react";
import "./styles.css";
import * as propTypes from "prop-types";
import { bodyTypes } from "../../../../../../constants/body-types";

export const ReqBodyTab = (props) => {
  const { selected, setSelected } = props;
  return (
    <div className="body-options-wrapper">
      {bodyTypes.map((option) => (
        <div key={option.value} className="body-options">
          <input
            name="req-body-radio"
            type="radio"
            id={option.value}
            value={option.value}
            onClick={() => setSelected(option.value)}
            className="radio-body-option"
            defaultChecked={selected === option.value ? true : false}
          />
          <label className="label-body-option" htmlFor={option.value}>
            {option.name}
          </label>
        </div>
      ))}
    </div>
  );
};

ReqBodyTab.propTypes = {
  selected: propTypes.string.isRequired,
  setSelected: propTypes.func.isRequired,
};
