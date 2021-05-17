import * as React from "react";
import "./styles.css";
import { NoAuth } from "./tabs/NoAuth";
import { BearerToken } from "./tabs/BearerToken";
import { BasicAuth } from "./tabs/BasicAuth";
import { ApiKey } from "./tabs/ApiKey";
import { authTypes } from "../../../../../constants/auth-types";

export const Authorization = () => {
  // move to parent to preserve state
  const [selected, setSelected] = React.useState(authTypes[0].value);
  return (
    <div className="req-auth-wrapper">
      <div className="auth-type">
        <div className="label-auth-type">Authorization Type: </div>
        <select
          onChange={(e) => setSelected(e.target.value)}
          className="select-auth-type"
          value={selected}
        >
          {authTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <div className="req-auth-type-window">
        {selected === "no-auth" ? (
          <NoAuth />
        ) : selected === "bearer-token" ? (
          <BearerToken />
        ) : selected === "basic-auth" ? (
          <BasicAuth />
        ) : selected === "api-key" ? (
          <ApiKey />
        ) : null}
      </div>
    </div>
  );
};
