import * as React from "react";
import "./styles.css";

export const BearerToken = () => {
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
      />
    </div>
  );
};
