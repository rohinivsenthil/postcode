import * as React from "react";
import { None } from "./tabs/None";
import { FormData } from "./tabs/FormData";
import { UrlCoded } from "./tabs/UrlCoded";
import { Raw } from "./tabs/Raw";
import { Binary } from "./tabs/Binary";
import * as propTypes from "prop-types";
import "./styles.css";

export const ReqBodyWindow = (props) => {
  const { selected, body, setBody } = props;
  const [formData, setFormData] = React.useState([{}]);
  const [urlCoded, setUrlCoded] = React.useState([{}]);
  return (
    <div className="request-body-window-wrapper">
      {selected === "none" ? (
        <None />
      ) : selected === "form-data" ? (
        <FormData formData={formData} setFormData={setFormData} />
      ) : selected === "urlcoded" ? (
        <UrlCoded urlCoded={urlCoded} setUrlCoded={setUrlCoded} />
      ) : selected === "raw" ? (
        <Raw />
      ) : selected === "binary" ? (
        <Binary />
      ) : null}
    </div>
  );
};

ReqBodyWindow.propTypes = {
  selected: propTypes.string.isRequired,
  body: propTypes.array.isRequired,
  setBody: propTypes.func.isRequired,
};
