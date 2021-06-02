import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  requestMethodUpdated,
  selectRequestMethod,
  requestMethods,
} from "../requestMethodSlice";
import "./styles.css";

export const RequestMethodSelector = () => {
  const requestMethod = useAppSelector(selectRequestMethod);
  const dispatch = useAppDispatch();

  return (
    <select
      className="request-method-selector"
      onChange={(e) => dispatch(requestMethodUpdated(e.target.value))}
      value={requestMethod}
    >
      {requestMethods.map(({ value, name }) => (
        <option value={value} key={value}>
          {name}
        </option>
      ))}
    </select>
  );
};
