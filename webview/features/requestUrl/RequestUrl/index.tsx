import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { requestUrlUpdated, selectRequestUrl } from "../requestUrlSlice";
import "./styles.css";

export const RequestUrl = () => {
  const requestUrl = useAppSelector(selectRequestUrl);
  const dispatch = useAppDispatch();

  return (
    <input
      placeholder="Enter request URL"
      className="input-request-url"
      value={requestUrl}
      onChange={(e) => dispatch(requestUrlUpdated(e.target.value))}
    />
  );
};
