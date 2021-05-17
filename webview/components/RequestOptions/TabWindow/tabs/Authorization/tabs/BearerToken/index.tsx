import * as React from "react";
import "./styles.css";
import * as propTypes from "prop-types";

export const BearerToken = (props) => {
  const { auth, setAuth } = props;
  return (
    <div className="bearer-token-wrapper">
      <div className="label-bearer-token">Token</div>
      <input
        type="text"
        id="bearer-token-input"
        name="bearer-token-input"
        placeholder="Token"
        autoComplete="off"
        className="input-bearer-token"
        value={auth.token || ""}
        onChange={(e) => setAuth({ ...auth, token: e.target.value })}
      />
    </div>
  );
};

BearerToken.propTypes = {
  auth: propTypes.object.isRequired,
  setAuth: propTypes.func.isRequired,
};
