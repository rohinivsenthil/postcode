import * as React from "react";
import { ReqBodyTab } from "../BodyWindowBar";
import { ReqBodyWindow } from "../BodyWindowContent";
import { bodyTypes } from "../../constants/body-types";
import * as propTypes from "prop-types";
import "./styles.css";
import { supportedLangs } from "../../constants/supported-langs";

export const Body = (props) => {
  const { setBody } = props;
  // move to parent to preserve state
  const [selected, setSelected] = React.useState(bodyTypes[0].value);
  const [language, setLanguage] = React.useState(supportedLangs[0].value);
  return (
    <div className="request-body-wrapper">
      <ReqBodyTab
        selected={selected}
        setSelected={setSelected}
        language={language}
        setLanguage={setLanguage}
      />
      <ReqBodyWindow
        selected={selected}
        setBody={setBody}
        language={language}
      />
    </div>
  );
};

Body.propTypes = {
  setBody: propTypes.func.isRequired,
};
