import * as React from "react";
import { KeyValueTable } from "../../../shared/KeyValueTable";
// import "./styles.css";

export const ResponseHeaders = () => {
  return (
    <div>
      <KeyValueTable
        data={[{}]}
        // onRowAdd={(value) => dispatch(requestQueryParamAdded(value))}
        // onRowDelete={(idx) => dispatch(requestQueryParamDeleted(idx))}
        // onRowUpdate={(idx, value) =>
        //   dispatch(requestQueryParamUpdated({ idx, value }))
        // }
      />
    </div>
  );
};
