import * as React from "react";
import { None } from "./tabs/None";
import { FormData } from "./tabs/FormData";
import { UrlCoded } from "./tabs/UrlCoded";
import { Raw } from "./tabs/Raw";
import { Binary } from "./tabs/Binary";
import * as propTypes from "prop-types";
import "./styles.css";

export const ReqBodyWindow = (props) => {
  const { selected, setBody } = props;
  const [formData, setFormData] = React.useState([{}]);
  const [urlCoded, setUrlCoded] = React.useState([{}]);
  const [binary, setBinary] = React.useState(new File([], "No file chosen"));
  const [raw, setRaw] = React.useState("");

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
        <Raw raw={raw} setRaw={setRaw} />
      ) : selected === "binary" ? (
        <Binary binary={binary} setBinary={setBinary} />
      ) : null}
    </div>
  );
};

ReqBodyWindow.propTypes = {
  selected: propTypes.string.isRequired,
  setBody: propTypes.func.isRequired,
};
