import * as React from "react";
import * as propTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
import "./styles.css";

export const KeyValueRow = (props) => {
  const {
    itemKey,
    itemValue,
    itemDescription,
    itemDisabled,
    actions,
    onDelete,
    onChange,
  } = props;

  return (
    <tr className={itemDisabled ? "kv-disabled" : null}>
      <td className="kv-action-cell">
        {actions && (
          <input
            type="checkbox"
            checked={!itemDisabled}
            onChange={(e) =>
              onChange({
                key: itemKey,
                value: itemValue,
                description: itemDescription,
                disabled: !e.target.checked,
              })
            }
          />
        )}
      </td>
      <td>
        <input
          className="kv-input"
          placeholder="Key"
          value={itemKey}
          onChange={(e) =>
            onChange({
              key: e.target.value,
              value: itemValue,
              description: itemDescription,
              disabled: itemDisabled,
            })
          }
        />
      </td>
      <td>
        <input
          className="kv-input"
          placeholder="Value"
          value={itemValue}
          onChange={(e) =>
            onChange({
              key: itemKey,
              value: e.target.value,
              description: itemDescription,
              disabled: itemDisabled,
            })
          }
        />
      </td>
      <td>
        <input
          className="kv-input"
          placeholder="Description"
          value={itemDescription}
          onChange={(e) =>
            onChange({
              key: itemKey,
              value: itemValue,
              description: e.target.value,
              disabled: itemDisabled,
            })
          }
        />
      </td>
      <td className="kv-action-cell">
        {actions && (
          <FaTrashAlt className="kv-delete-button" onClick={onDelete} />
        )}
      </td>
    </tr>
  );
};

export const KeyValueTable = (props) => {
  const { data, onRowUpdate, onRowAdd, onRowDelete } = props;

  return (
    <table className="kv-table">
      <thead>
        <tr>
          <th></th>
          <th className="kv-heading-cell">KEY</th>
          <th className="kv-heading-cell">VALUE</th>
          <th className="kv-heading-cell">DESCRIPTION</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {[...data, {}].map(({ key, value, description, disabled }, idx) => (
          <KeyValueRow
            itemKey={key || ""}
            itemValue={value || ""}
            itemDescription={description || ""}
            itemDisabled={disabled || false}
            onDelete={() => onRowDelete(idx)}
            onChange={(item) =>
              idx === data.length ? onRowAdd(item) : onRowUpdate(idx, item)
            }
            key={idx}
            actions={idx !== data.length}
          />
        ))}
      </tbody>
    </table>
  );
};

KeyValueTable.propTypes = {
  data: propTypes.array.isRequired,
  onRowDelete: propTypes.func.isRequired,
  onRowAdd: propTypes.func.isRequired,
  onRowUpdate: propTypes.func.isRequired,
};

KeyValueRow.propTypes = {
  itemKey: propTypes.string.isRequired,
  itemValue: propTypes.string.isRequired,
  itemDescription: propTypes.string.isRequired,
  itemDisabled: propTypes.bool.isRequired,
  actions: propTypes.bool.isRequired,
  onChange: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
};
