import * as React from "react";
import "./styles.css";
import { KeyValueTable } from "../../../shared/KeyValueTable";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  requestHeaderAdded,
  requestHeaderUpdated,
  requestHeaderDeleted,
  selectRequestHeaders,
} from "../requestHeaderSlice";

export const Headers = () => {
  const header = useAppSelector(selectRequestHeaders);
  const dispatch = useAppDispatch();

  return (
    <div className="headers-wrapper">
      <KeyValueTable
        data={header}
        onRowAdd={(value) => dispatch(requestHeaderAdded(value))}
        onRowDelete={(idx) => dispatch(requestHeaderDeleted(idx))}
        onRowUpdate={(idx, value) =>
          dispatch(requestHeaderUpdated({ idx, value }))
        }
      />
    </div>
  );
};
