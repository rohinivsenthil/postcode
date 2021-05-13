import * as React from "react";
import "./styles.css";
import { keyValueTable } from "../../constants/key-value-table";
import * as propTypes from "prop-types";

const KeyValueRow = (props) => {
  const { data } = props;
  const [key, setKey] = React.useState(data.key);
  const [value, setValue] = React.useState(data.value);
  const [description, setDescription] = React.useState(data.desc);
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
  const { data } = props;
  return (
    <div>
      <div className="kv-table-wrapper">
        {keyValueTable.map((item) => (
          <div className="kv-table-heading" key={item.heading}>
            {item.heading}
          </div>
        ))}
      </div>
      {data.map((item) => (
        <KeyValueRow key={item.value} data={item} />
      ))}
    </div>
  );
};

KeyValueTable.propTypes = {
  data: propTypes.array.isRequired,
};

KeyValueRow.propTypes = {
  data: propTypes.object.isRequired,
};
