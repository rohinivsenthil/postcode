import * as React from "react";
import "./styles.css";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  requestAuthOptionsUpdated,
  selectBasicAuthOptions,
} from "../requestAuthSlice";

export const BasicAuth = () => {
  const basicAuthOptions = useAppSelector(selectBasicAuthOptions);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="basic-auth-input-group">
        <div className="label-basic-auth">Username</div>
        <input
          type="text"
          id="basic-auth-username-input"
          name="basic-auth-username-input"
          placeholder="Username"
          autoComplete="off"
          className="input-basic-auth"
          value={basicAuthOptions.username}
          onChange={(e) =>
            dispatch(
              requestAuthOptionsUpdated({
                username: e.target.value,
                password: basicAuthOptions.password,
              })
            )
          }
        />
      </div>
      <div className="basic-auth-input-group">
        <div className="label-basic-auth">Password</div>
        <input
          type="password"
          id="basic-auth-password-input"
          name="basic-auth-password-input"
          placeholder="Password"
          autoComplete="off"
          className="input-basic-auth"
          value={basicAuthOptions.password}
          onChange={(e) =>
            dispatch(
              requestAuthOptionsUpdated({
                username: basicAuthOptions.username,
                password: e.target.value,
              })
            )
          }
        />
      </div>
    </div>
  );
};