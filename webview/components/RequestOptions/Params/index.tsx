import * as React from "react";
import "./styles.css";
import { KeyValueTable } from "../../../shared/KeyValueTable";
import { defaultTableRow } from "../../../constants/key-value-table";

export const Params = () => {
  const [params, setParams] = React.useState([defaultTableRow]);
  return (
    <div className="params-wrapper">
      <div className="params-title">Query Params</div>
      <KeyValueTable data={params} />
      <button
        className="params-add-btn"
        onClick={() => setParams([...params, defaultTableRow])}
      >
        + Add
      </button>
    </div>
  );
};
