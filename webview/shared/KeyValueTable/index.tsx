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
    fixed,
  } = props;

  return (
    <tr className={itemDisabled ? "kv-disabled" : null}>
      {!fixed && (
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
      )}
      <td>
        <input
          className="kv-input"
          placeholder="Key"
          value={itemKey}
          disabled={fixed}
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
          disabled={fixed}
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
      {!fixed && (
        <td>
          <input
            className="kv-input"
            placeholder="Description"
            value={itemDescription}
            disabled={fixed}
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
      )}
      {!fixed && (
        <td className="kv-action-cell">
          {actions && (
            <FaTrashAlt className="kv-delete-button" onClick={onDelete} />
          )}
        </td>
      )}
    </tr>
  );
};

export const KeyValueTable = (props) => {
  const { data, fixed, onRowUpdate, onRowAdd, onRowDelete } = props;

  return (
    <table className="kv-table">
      <thead>
        <tr>
          {!fixed && <th></th>}
          <th className="kv-heading-cell">KEY</th>
          <th className="kv-heading-cell">VALUE</th>
          {!fixed && <th className="kv-heading-cell">DESCRIPTION</th>}
          {!fixed && <th></th>}
        </tr>
      </thead>
      <tbody>
        {(fixed ? data : [...data, {}]).map(
          ({ key, value, description, disabled }, idx) => (
            <KeyValueRow
              fixed={fixed}
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
          )
        )}
      </tbody>
    </table>
  );
};

KeyValueTable.propTypes = {
  data: propTypes.array.isRequired,
  fixed: propTypes.bool,
  onRowDelete: propTypes.func.isRequired,
  onRowAdd: propTypes.func.isRequired,
  onRowUpdate: propTypes.func.isRequired,
};

KeyValueRow.propTypes = {
  fixed: propTypes.bool,
  itemKey: propTypes.string.isRequired,
  itemValue: propTypes.string.isRequired,
  itemDescription: propTypes.string.isRequired,
  itemDisabled: propTypes.bool.isRequired,
  actions: propTypes.bool.isRequired,
  onChange: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
};
