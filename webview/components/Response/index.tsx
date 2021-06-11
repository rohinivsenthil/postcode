import * as React from "react";
import { ResponseTab } from "../../features/response/ResponseTab";
import { ResponseWindow } from "../../features/response/ResponseWindow";
import { ReactComponent as PackageIcon } from "../../icons/package.svg";
import "./styles.css";
import { useAppSelector } from "../../redux/hooks";
import { selectResponse } from "../../features/response/responseSlice";
import { supportedLangs } from "../../constants/supported-langs";

export const Response = () => {
  const response = useAppSelector(selectResponse);
  const [selected, setSelected] = React.useState("body");
  const [language, setLanguage] = React.useState(supportedLangs[0].value);

  if (response.loading) {
    return (
      <div className="loader-wrapper">
        <div>Sending request ...</div>
        <div className="loader" />
      </div>
    );
  } else if (response.initial) {
    return (
      <div className="initial-response-wrapper">
        <div className="initial-text">Hit Send to get a response</div>
        <PackageIcon className="img-initial-response" />
      </div>
    );
  } else if (response.error) {
    return (
      <div className="error-response-wrapper">
        <div>Could not send request</div>
        <div className="error-message">{`Error: ${response.error.message}`}</div>
        <PackageIcon className="img-error-response" />
      </div>
    );
  } else {
    return (
      <div className="response-body-wrapper">
        <ResponseTab
          selected={selected}
          setSelected={setSelected}
          language={language}
          setLanguage={setLanguage}
        />
        <ResponseWindow selected={selected} language={language} />
      </div>
    );
  }
};
