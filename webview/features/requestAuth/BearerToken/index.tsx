import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  requestAuthOptionsUpdated,
  selectBearerAuthOptions,
} from "../requestAuthSlice";
import "./styles.css";

export const BearerToken = () => {
  const bearerAuthOptions = useAppSelector(selectBearerAuthOptions);
  const dispatch = useAppDispatch();

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
        value={bearerAuthOptions.token}
        onChange={(e) =>
          dispatch(requestAuthOptionsUpdated({ token: e.target.value }))
        }
      />
    </div>
  );
};
