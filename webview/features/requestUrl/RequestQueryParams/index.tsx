import * as React from "react";
import "./styles.css";
import { KeyValueTable } from "../../../shared/KeyValueTable";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  requestQueryParamAdded,
  requestQueryParamDeleted,
  requestQueryParamUpdated,
  selectRequestQueryParams,
} from "../requestUrlSlice";

export const RequestQueryParams = () => {
  const queryParams = useAppSelector(selectRequestQueryParams);
  const dispatch = useAppDispatch();

  return (
    <div className="params-wrapper">
      <KeyValueTable
        data={queryParams}
        onRowAdd={(value) => dispatch(requestQueryParamAdded(value))}
        onRowDelete={(idx) => dispatch(requestQueryParamDeleted(idx))}
        onRowUpdate={(idx, value) =>
          dispatch(requestQueryParamUpdated({ idx, value }))
        }
      />
    </div>
  );
};
