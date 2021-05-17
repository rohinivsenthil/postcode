import * as React from "react";
import "./styles.css";
import { requestTypes } from "../../constants/request-types";
import * as propTypes from "prop-types";

export const RequestBar = (props) => {
  const { setReqType } = props;
  return (
    <div className="request-bar">
      {/** request type dropdown */}
      <select
        name="request-type"
        id="request-type"
        className="select-request-type"
        onChange={(e) => setReqType(e.target.value)}
      >
        {requestTypes.map((type) => (
          <option value={type.value} key={type.value}>
            {type.name}
          </option>
        ))}
      </select>
      {/** request URL text box */}
      <input
        type="text"
        id="request-url"
        name="request-url"
        placeholder="Enter request URL"
        className="input-request-url"
      />
      {/** request send button*/}
      <button
        name="request-send"
        id="request-send"
        className="button-request-send"
      >
        Send
      </button>
    </div>
  );
};

RequestBar.propTypes = {
  setReqType: propTypes.func.isRequired,
};
