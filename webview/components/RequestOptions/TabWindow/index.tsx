import * as React from "react";
import { Params } from "./tabs/Params";
import { Authorization } from "./tabs/Authorization";
import { Body } from "./tabs/Body";
import { Headers } from "./tabs/Headers";
import * as propTypes from "prop-types";
import "./styles.css";

export const RequestOptionsWindow = (props) => {
  const { selected, headers, setHeaders, params, setParams, body, setBody } =
    props;
  return (
    <div className="request-options-window-wrapper">
      {selected === "params" ? (
        <Params params={params} setParams={setParams} />
      ) : selected === "authorization" ? (
        <Authorization />
      ) : selected === "body" ? (
        <Body body={body} setBody={setBody} />
      ) : selected === "headers" ? (
        <Headers headers={headers} setHeaders={setHeaders} />
      ) : null}
    </div>
  );
};

RequestOptionsWindow.propTypes = {
  selected: propTypes.string.isRequired,
  headers: propTypes.array.isRequired,
  setHeaders: propTypes.func.isRequired,
  params: propTypes.array.isRequired,
  setParams: propTypes.func.isRequired,
  body: propTypes.array.isRequired,
  setBody: propTypes.func.isRequired,
};
