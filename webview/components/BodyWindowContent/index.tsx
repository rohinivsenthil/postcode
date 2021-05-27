import * as React from "react";
import { None } from "../NoBodyTab";
import { FormData } from "../FormDataTab";
import { UrlCoded } from "../UrlCodedTab";
import { Raw } from "../RawTab";
import { Binary } from "../Binary";
import * as propTypes from "prop-types";
import "./styles.css";

export const ReqBodyWindow = (props) => {
  const {
    selected,
    setBody,
    language,
    formData,
    setFormData,
    urlCoded,
    setUrlCoded,
    binary,
    setBinary,
    raw,
    setRaw,
  } = props;

  React.useEffect(() => {
    if (selected === "none") {
      setBody("");
    } else if (selected === "form-data") {
      const data = new URLSearchParams();
      formData.forEach((item: { key?: string; value?: string }) => {
        data.append(item.key || "", item.value || "");
      });
      setBody(data.toString());
    } else if (selected === "urlcoded") {
      const data = new URLSearchParams();
      urlCoded.forEach((item: { key?: string; value?: string }) => {
        data.append(item.key || "", item.value || "");
      });
      setBody(data.toString());
    } else if (selected === "raw") {
      setBody(raw);
    } else if (selected === "binary") {
      const setBinaryBody = async () => {
        setBody(await binary.text());
      };
      setBinaryBody();
    }
  }, [formData, urlCoded, raw, binary, selected]);

  return (
    <div className="request-body-window-wrapper">
      {selected === "none" ? (
        <None />
      ) : selected === "form-data" ? (
        <FormData formData={formData} setFormData={setFormData} />
      ) : selected === "urlcoded" ? (
        <UrlCoded urlCoded={urlCoded} setUrlCoded={setUrlCoded} />
      ) : selected === "raw" ? (
        <Raw raw={raw} setRaw={setRaw} language={language} />
      ) : selected === "binary" ? (
        <Binary binary={binary} setBinary={setBinary} />
      ) : null}
    </div>
  );
};

ReqBodyWindow.propTypes = {
  selected: propTypes.string.isRequired,
  setBody: propTypes.func.isRequired,
  language: propTypes.string.isRequired,
  formData: propTypes.any.isRequired,
  setFormData: propTypes.any.isRequired,
  urlCoded: propTypes.any.isRequired,
  setUrlCoded: propTypes.any.isRequired,
  binary: propTypes.any.isRequired,
  setBinary: propTypes.any.isRequired,
  raw: propTypes.any.isRequired,
  setRaw: propTypes.any.isRequired,
};
