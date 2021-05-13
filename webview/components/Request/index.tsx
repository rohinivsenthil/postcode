/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import "./styles.css";
import { RequestBar } from "../RequestBar";
import { TabBar as RequestOptionsTab } from "../RequestOptions/TabBar";
import { Params as ParamsOption } from "../RequestOptions/Params";

export const Request = () => {
  return (
    <div className="request-wrapper">
      <RequestBar />
      <RequestOptionsTab />
      <ParamsOption />
    </div>
  );
};
