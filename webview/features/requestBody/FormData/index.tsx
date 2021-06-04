import * as React from "react";
import "./styles.css";
import { KeyValueTable } from "../../../shared/KeyValueTable";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  selectRequestBodyFormData,
  requestBodyFormDataItemAdded,
  requestBodyFormDataItemDeleted,
  requestBodyFormDataItemUpdated,
} from "../requestBodySlice";

export const FormData = () => {
  const urlEncoded = useAppSelector(selectRequestBodyFormData);
  const dispatch = useAppDispatch();

  return (
    <div className="form-data-wrapper">
      <KeyValueTable
        data={urlEncoded}
        onRowAdd={(value) => dispatch(requestBodyFormDataItemAdded(value))}
        onRowDelete={(idx) => dispatch(requestBodyFormDataItemDeleted(idx))}
        onRowUpdate={(idx, value) =>
          dispatch(requestBodyFormDataItemUpdated({ idx, value }))
        }
      />
    </div>
  );
};
