/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import "./styles.css";
import { keyValueTable } from "../../constants/key-value-table";
import propTypes from "prop-types";

const KeyValueRow = () => {
  const [key, setKey] = React.useState("");
  const [value, setValue] = React.useState("");
  const [description, setDescription] = React.useState("");
  return (
    <div className="kv-row-wrapper">
      <input
        type="text"
        id="tr-input-key"
        name="tr-input-key"
        placeholder="Key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        className="kv-row-input"
      />
      <input
        type="text"
        id="tr-input-value"
        name="tr-input-value"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="kv-row-input"
      />
      <input
        type="text"
        id="tr-input-desc"
        name="tr-input-desc"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="kv-row-input"
      />
    </div>
  );
};

export const KeyValueTable = (props) => {
  const { rows } = props;
  console.log("key value comp", rows);
  return (
    <div>
      <div className="kv-table-wrapper">
        {keyValueTable.map((item) => (
          <div className="kv-table-heading" key={item.heading}>
            {item.heading}
          </div>
        ))}
      </div>
      {Array.from({ length: rows }, () => (
        <KeyValueRow />
      ))}
    </div>
  );
};

KeyValueTable.propTypes = {
  rows: propTypes.number.isRequired,
};
