import * as React from "react";
import "./styles.css";
import { NoAuth } from "./tabs/NoAuth";
import { BearerToken } from "./tabs/BearerToken";
import { BasicAuth } from "./tabs/BasicAuth";
import { authTypes } from "../../../../../constants/auth-types";
import * as propTypes from "prop-types";

export const Authorization = (props) => {
  const { auth, setAuth } = props;
  // move to parent to preserve state
  return (
    <div className="req-auth-wrapper">
      <div className="auth-type">
        <div className="label-auth-type">Authorization Type: </div>
        <select
          onChange={(e) => setAuth({ ...auth, selected: e.target.value })}
          className="select-auth-type"
          value={auth.selected}
        >
          {authTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <div className="req-auth-type-window">
        {auth.selected === "no-auth" ? (
          <NoAuth />
        ) : auth.selected === "bearer-token" ? (
          <BearerToken auth={auth} setAuth={setAuth} />
        ) : auth.selected === "basic-auth" ? (
          <BasicAuth auth={auth} setAuth={setAuth} />
        ) : null}
      </div>
    </div>
  );
};

Authorization.propTypes = {
  auth: propTypes.object.isRequired,
  setAuth: propTypes.func.isRequired,
};
