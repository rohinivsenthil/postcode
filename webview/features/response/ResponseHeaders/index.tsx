import * as React from "react";
import { useAppSelector } from "../../../redux/hooks";
import { KeyValueTable } from "../../../shared/KeyValueTable";
import { selectResponseHeaders } from "../responseSlice";
// import "./styles.css";

export const ResponseHeaders = () => {
  const headers = useAppSelector(selectResponseHeaders);

  return (
    <div>
      <KeyValueTable
        data={headers}
        fixed
        // onRowAdd={(value) => dispatch(requestQueryParamAdded(value))}
        // onRowDelete={(idx) => dispatch(requestQueryParamDeleted(idx))}
        // onRowUpdate={(idx, value) =>
        //   dispatch(requestQueryParamUpdated({ idx, value }))
        // }
      />
    </div>
  );
};
