import * as React from "react";
import { ReqBodyTab } from "../BodyWindowBar";
import { ReqBodyWindow } from "../BodyWindowContent";
import * as propTypes from "prop-types";
import "./styles.css";

export const Body = (props) => {
  const {
    setBody,
    formData,
    setFormData,
    urlCoded,
    setUrlCoded,
    binary,
    setBinary,
    raw,
    setRaw,
    selectedBodyType,
    setSelectedBodyType,
    rawLanguage,
    setRawLanguage,
  } = props;

  return (
    <div className="request-body-wrapper">
      <ReqBodyTab
        selected={selectedBodyType}
        setSelected={setSelectedBodyType}
        language={rawLanguage}
        setLanguage={setRawLanguage}
      />
      <ReqBodyWindow
        selected={selectedBodyType}
        setBody={setBody}
        language={rawLanguage}
        formData={formData}
        setFormData={setFormData}
        urlCoded={urlCoded}
        setUrlCoded={setUrlCoded}
        binary={binary}
        setBinary={setBinary}
        raw={raw}
        setRaw={setRaw}
      />
    </div>
  );
};

Body.propTypes = {
  setBody: propTypes.func.isRequired,
  formData: propTypes.any.isRequired,
  setFormData: propTypes.any.isRequired,
  urlCoded: propTypes.any.isRequired,
  setUrlCoded: propTypes.any.isRequired,
  binary: propTypes.any.isRequired,
  setBinary: propTypes.any.isRequired,
  raw: propTypes.any.isRequired,
  setRaw: propTypes.any.isRequired,
  selectedBodyType: propTypes.any.isRequired,
  setSelectedBodyType: propTypes.any.isRequired,
  rawLanguage: propTypes.any.isRequired,
  setRawLanguage: propTypes.any.isRequired,
};
