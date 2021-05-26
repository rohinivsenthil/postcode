import * as React from "react";
import "./styles.css";
import { KeyValueTable } from "../../shared/KeyValueTable";
import * as propTypes from "prop-types";

export const UrlCoded = (props) => {
  const { urlCoded, setUrlCoded } = props;
  return (
    <div className="url-coded-wrapper">
      <KeyValueTable data={urlCoded} setData={setUrlCoded} />
    </div>
  );
};

UrlCoded.propTypes = {
  urlCoded: propTypes.array.isRequired,
  setUrlCoded: propTypes.func.isRequired,
};
