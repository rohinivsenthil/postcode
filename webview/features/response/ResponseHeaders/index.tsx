import * as React from "react";
import { useAppSelector } from "../../../redux/hooks";
import { KeyValueTable } from "../../../shared/KeyValueTable";
import { selectResponseHeaders } from "../responseSlice";
import "./styles.css";

export const ResponseHeaders = () => {
  const headers = useAppSelector(selectResponseHeaders);

  return (
    <div className="response-headers">
      <KeyValueTable data={headers} fixed />
    </div>
  );
};
