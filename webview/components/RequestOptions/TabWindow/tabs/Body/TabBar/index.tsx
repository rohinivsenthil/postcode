import * as React from "react";
import "./styles.css";
import * as propTypes from "prop-types";
import { bodyTypes } from "../../../../../../constants/body-types";

export const BodyTabBar = (props) => {
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
            checked={selected === option.value ? true : false}
          />
          <label className="label-body-option" htmlFor={option.value}>
            {option.name}
          </label>
        </div>
      ))}
    </div>
  );
};

BodyTabBar.propTypes = {
  selected: propTypes.string.isRequired,
  setSelected: propTypes.func.isRequired,
};
