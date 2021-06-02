import * as React from "react";
import { Params } from "../ParamsWindow";
import { RequestAuth } from "../../features/requestAuth/RequestAuth";
import { Body } from "../BodyWindow";
import { Headers } from "../HeadersWindow";
import * as propTypes from "prop-types";
import "./styles.css";

export const RequestOptionsWindow = (props) => {
  const {
    selected,
    headers,
    setHeaders,
    params,
    setParams,
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
    <div className="request-options-window-wrapper">
      {selected === "params" ? (
        <Params params={params} setParams={setParams} />
      ) : selected === "authorization" ? (
        <RequestAuth />
      ) : selected === "body" ? (
        <Body
          setBody={setBody}
          formData={formData}
          setFormData={setFormData}
          urlCoded={urlCoded}
          setUrlCoded={setUrlCoded}
          binary={binary}
          setBinary={setBinary}
          raw={raw}
          setRaw={setRaw}
          selectedBodyType={selectedBodyType}
          setSelectedBodyType={setSelectedBodyType}
          rawLanguage={rawLanguage}
          setRawLanguage={setRawLanguage}
        />
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
