import * as React from "react";
import "./styles.css";
import * as propTypes from "prop-types";

export const BasicAuth = (props) => {
  const { auth, setAuth } = props;
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
          value={auth.username || ""}
          onChange={(e) => {
            setAuth({ ...auth, username: e.target.value });
          }}
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
          value={auth.password || ""}
          onChange={(e) => {
            setAuth({ ...auth, password: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

BasicAuth.propTypes = {
  auth: propTypes.object.isRequired,
  setAuth: propTypes.func.isRequired,
};
