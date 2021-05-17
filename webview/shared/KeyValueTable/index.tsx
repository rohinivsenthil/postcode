import * as React from "react";
import "./styles.css";
import { keyValueTable } from "../../constants/key-value-table";
import * as propTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";

const KeyValueRow = (props) => {
  const { id, data, setData } = props;
  return (
    <div className="kv-row-wrapper">
      <div className="kv-row-iwc-wrapper">
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            className="input-checkbox"
            checked={data[id].checked}
            onChange={(e) =>
              setData([
                ...data.slice(0, id),
                { ...data[id], checked: e.currentTarget.checked },
                ...data.slice(id + 1),
              ])
            }
          />
        </div>
        <input
          type="text"
          id="tr-input-key"
          name="tr-input-key"
          placeholder="Key"
          autoComplete="off"
          value={data[id].key || ""}
          onChange={(e) =>
            setData([
              ...data.slice(0, id),
              {
                ...data[id],
                key: e.target.value,
                checked:
                  data[id].checked === undefined ? true : data[id].checked,
              },
              ...data.slice(id + 1),
            ])
          }
          className={
            data[id].checked === false
              ? "kv-row-iwc kv-row-input-unchecked"
              : "kv-row-iwc"
          }
        />
      </div>
      <input
        type="text"
        id="tr-input-value"
        name="tr-input-value"
        placeholder="Value"
        autoComplete="off"
        value={data[id].value || ""}
        onChange={(e) =>
          setData([
            ...data.slice(0, id),
            {
              ...data[id],
              value: e.target.value,
              checked: data[id].checked === undefined ? true : data[id].checked,
            },
            ...data.slice(id + 1),
          ])
        }
        className={
          data[id].checked === false
            ? "kv-row-input kv-row-input-unchecked"
            : "kv-row-input"
        }
      />
      <div className="kv-row-iwt-wrapper">
        <input
          type="text"
          id="tr-input-desc"
          name="tr-input-desc"
          autoComplete="off"
          placeholder="Description"
          value={data[id].desc || ""}
          onChange={(e) =>
            setData([
              ...data.slice(0, id),
              {
                ...data[id],
                desc: e.target.value,
                checked:
                  data[id].checked === undefined ? true : data[id].checked,
              },
              ...data.slice(id + 1),
            ])
          }
          className={
            data[id].checked === false
              ? "kv-row-iwt kv-row-input-unchecked"
              : "kv-row-iwt"
          }
        />
        <div className="trash-icon-wrapper">
          <FaTrashAlt
            className="trash-icon"
            onClick={() => console.log("hello")}
          />
        </div>
      </div>
    </div>
  );
};

export const KeyValueTable = (props) => {
  const { data, setData } = props;

  React.useEffect(() => {
    if (
      data[data.length - 1].key ||
      data[data.length - 1].value ||
      data[data.length - 1].desc
    ) {
      setData([...data, {}]);
    }
  }, [data]);

  return (
    <div className="kv-table-wrapper">
      <div className="kv-heading-wrapper">
        {keyValueTable.map((item) => (
          <div className="kv-table-heading" key={item.heading}>
            {item.heading}
          </div>
        ))}
      </div>
      {data.map((item, idx) => (
        <KeyValueRow key={idx} data={data} setData={setData} id={idx} />
      ))}
    </div>
  );
};

KeyValueTable.propTypes = {
  data: propTypes.array.isRequired,
  setData: propTypes.func.isRequired,
};

KeyValueRow.propTypes = {
  id: propTypes.number.isRequired,
  data: propTypes.array.isRequired,
  setData: propTypes.func.isRequired,
};
