import * as React from "react";
import { Params } from "./tabs/Params";
import { Authorization } from "./tabs/Authorization";
import { Body } from "./tabs/Body";
import { Headers } from "./tabs/Headers";
import * as propTypes from "prop-types";

export const TabWindow = (props) => {
  const { selected, headers, setHeaders, params, setParams } = props;
  return (
    <div>
      {selected === "params" ? (
        <Params params={params} setParams={setParams} />
      ) : selected === "authorization" ? (
        <Authorization />
      ) : selected === "body" ? (
        <Body />
      ) : selected === "headers" ? (
        <Headers headers={headers} setHeaders={setHeaders} />
      ) : null}
    </div>
  );
};

TabWindow.propTypes = {
  selected: propTypes.string.isRequired,
  headers: propTypes.array.isRequired,
  setHeaders: propTypes.func.isRequired,
  params: propTypes.array.isRequired,
  setParams: propTypes.func.isRequired,
};
