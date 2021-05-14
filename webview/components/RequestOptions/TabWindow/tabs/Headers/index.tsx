import * as React from "react";
import "./styles.css";
import { KeyValueTable } from "../../../../../shared/KeyValueTable";
import * as propTypes from "prop-types";

export const Headers = (props) => {
  const { headers, setHeaders } = props;
  return (
    <div className="headers-wrapper">
      <div className="headers-title">Headers</div>
      <KeyValueTable data={headers} setData={setHeaders} />
      <button
        className="headers-add-btn"
        onClick={() => setHeaders([...headers, {}])}
      >
        + Add
      </button>
    </div>
  );
};

Headers.propTypes = {
  headers: propTypes.array.isRequired,
  setHeaders: propTypes.func.isRequired,
};
