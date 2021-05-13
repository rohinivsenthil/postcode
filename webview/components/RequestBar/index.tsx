/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import "./styles.css";
import requestTypes from "../../constants/request-types.json";

export const RequestBar = () => {
  return (
    <div className="request-bar">
      {/** request type dropdown */}
      <select
        name="request-type"
        id="request-type"
        className="select-request-type"
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
