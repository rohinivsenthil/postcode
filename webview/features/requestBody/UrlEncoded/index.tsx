import * as React from "react";
import "./styles.css";
import { KeyValueTable } from "../../../shared/KeyValueTable";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  selectRequestBodyUrlEncoded,
  requestBodyUrlEncodedItemAdded,
  requestBodyUrlEncodedItemDeleted,
  requestBodyUrlEncodedItemUpdated,
} from "../requestBodySlice";

export const UrlEncoded = () => {
  const urlEncoded = useAppSelector(selectRequestBodyUrlEncoded);
  const dispatch = useAppDispatch();

  return (
    <div className="url-encoded-wrapper">
      <KeyValueTable
        data={urlEncoded}
        onRowAdd={(value) => dispatch(requestBodyUrlEncodedItemAdded(value))}
        onRowDelete={(idx) => dispatch(requestBodyUrlEncodedItemDeleted(idx))}
        onRowUpdate={(idx, value) =>
          dispatch(requestBodyUrlEncodedItemUpdated({ idx, value }))
        }
      />
    </div>
  );
};
