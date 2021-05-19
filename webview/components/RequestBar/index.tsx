import * as React from "react";
import "./styles.css";
import { requestTypes } from "../../constants/request-types";
import * as propTypes from "prop-types";

export const RequestBar = (props) => {
  const { requestUrl, setRequestUrl, sendRequest, setReqType } = props;
  return (
    <div className="request-bar">
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
      <input
        type="text"
        id="request-url"
        name="request-url"
        placeholder="Enter request URL"
        className="input-request-url"
        value={requestUrl}
        onChange={(e) => setRequestUrl(e.target.value)}
      />
      <button
        name="request-send"
        id="request-send"
        className="button-request-send"
        onClick={sendRequest}
      >
        Send
      </button>
    </div>
  );
};

RequestBar.propTypes = {
  requestUrl: propTypes.string.isRequired,
  setRequestUrl: propTypes.func.isRequired,
  sendRequest: propTypes.func.isRequired,
  setReqType: propTypes.func.isRequired,
};
