import * as React from "react";
import "./styles.css";
import { NoAuth } from "../NoAuth";
import { BearerToken } from "../BearerToken";
import { BasicAuth } from "../BasicAuth";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  requestAuthTypes,
  requestAuthTypeUpdated,
  selectRequestAuthType,
} from "../requestAuthSlice";

export const RequestAuth = () => {
  const requestAuthType = useAppSelector(selectRequestAuthType);
  const dispatch = useAppDispatch();

  return (
    <div className="req-auth-wrapper">
      <div className="auth-type">
        <div className="label-auth-type">Authorization Type: </div>
        <select
          onChange={(e) => dispatch(requestAuthTypeUpdated(e.target.value))}
          className="select-auth-type"
          value={requestAuthType}
        >
          {requestAuthTypes.map(({ value, name }) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="req-auth-type-window">
        {requestAuthType === "noauth" ? (
          <NoAuth />
        ) : requestAuthType === "bearer" ? (
          <BearerToken />
        ) : requestAuthType === "basic" ? (
          <BasicAuth />
        ) : null}
      </div>
    </div>
  );
};
