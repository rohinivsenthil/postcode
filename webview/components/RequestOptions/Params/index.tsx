/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import "./styles.css";
import { KeyValueTable } from "../../../shared/KeyValueTable";

export const Params = () => {
  const [rows, setRows] = React.useState(1);
  console.log("params comp", rows);
  return (
    <div className="params-wrapper">
      <div className="params-title">Query Params</div>
      <KeyValueTable rows={rows} />
      <button className="params-add-btn" onClick={() => setRows(rows + 1)}>
        + Add
      </button>
    </div>
  );
};
