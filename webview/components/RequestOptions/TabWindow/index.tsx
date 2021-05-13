/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import * as React from "react";
import { Params } from "../Params";
import { Authorization } from "../Authorization";
import { Body } from "../Body";
import { Headers } from "../Headers";
import * as propTypes from "prop-types";

export const TabWindow = (props) => {
  const { selected } = props;
  return (
    <div>
      {selected === "params" ? (
        <Params />
      ) : selected === "authorization" ? (
        <Authorization />
      ) : selected === "body" ? (
        <Body />
      ) : selected === "headers" ? (
        <Headers />
      ) : null}
    </div>
  );
};

TabWindow.propTypes = {
  selected: propTypes.string.isRequired,
};
