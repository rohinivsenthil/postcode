import * as React from "react";
import "./styles.css";
import { KeyValueTable } from "../../../../../shared/KeyValueTable";
import * as propTypes from "prop-types";

export const Headers = (props) => {
  const { headers, setHeaders } = props;
  return (
    <div className="headers-wrapper">
      <KeyValueTable data={headers} setData={setHeaders} />
    </div>
  );
};

Headers.propTypes = {
  headers: propTypes.array.isRequired,
  setHeaders: propTypes.func.isRequired,
};
