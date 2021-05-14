import * as React from "react";
import "./styles.css";
import { KeyValueTable } from "../../../shared/KeyValueTable";
import * as propTypes from "prop-types";

export const Params = (props) => {
  const { params, setParams } = props;
  return (
    <div className="params-wrapper">
      <div className="params-title">Query Params</div>
      <KeyValueTable data={params} setData={setParams} />
      <button
        className="params-add-btn"
        onClick={() => setParams([...params, {}])}
      >
        + Add
      </button>
    </div>
  );
};

Params.propTypes = {
  params: propTypes.array.isRequired,
  setParams: propTypes.func.isRequired,
};
