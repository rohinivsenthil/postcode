import * as React from "react";
import { ReqBodyTab } from "./TabBar";
import { ReqBodyWindow } from "./TabWindow";
import { bodyTypes } from "../../../../../constants/body-types";
import * as propTypes from "prop-types";
import "./styles.css";

export const Body = (props) => {
  const { body, setBody } = props;
  const [selected, setSelected] = React.useState(bodyTypes[0].value);
  return (
    <div className="request-body-wrapper">
      <ReqBodyTab selected={selected} setSelected={setSelected} />
      <ReqBodyWindow selected={selected} body={body} setBody={setBody} />
    </div>
  );
};

Body.propTypes = {
  body: propTypes.array.isRequired,
  setBody: propTypes.func.isRequired,
};
