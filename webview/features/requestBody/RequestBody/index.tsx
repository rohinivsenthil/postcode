import * as React from "react";
import { Binary } from "../Binary";
import { FormData } from "../FormData";
import { None } from "../NoBody";
import { Raw } from "../Raw";
import { UrlEncoded } from "../UrlEncoded";
import {
  requestBodyModes,
  requestBodyRawLanguages,
  requestBodyRawLanguageUpdated,
  requestBodyModeUpdated,
  selectRequestBodyMode,
  selectRequestBodyRawLanguage,
} from "../requestBodySlice";
import "./styles.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

export const Body = () => {
  const bodyMode = useAppSelector(selectRequestBodyMode);
  const language = useAppSelector(selectRequestBodyRawLanguage);
  const dispatch = useAppDispatch();

  return (
    <div className="request-body-wrapper">
      <div className="body-options-wrapper">
        {requestBodyModes.map(({ name, value }) => (
          <div key={value} className="body-options">
            <input
              name="req-body-radio"
              type="radio"
              id={value}
              value={value}
              onChange={(e) =>
                e.target.checked && dispatch(requestBodyModeUpdated(value))
              }
              className="radio-body-option"
              checked={bodyMode === value ? true : false}
            />
            <label className="label-body-option" htmlFor={value}>
              {name}
            </label>
          </div>
        ))}
        {bodyMode === "raw" ? (
          <select
            className="select-raw-lang"
            value={language}
            onChange={(e) =>
              dispatch(requestBodyRawLanguageUpdated(e.target.value))
            }
          >
            {requestBodyRawLanguages.map((type) => (
              <option key={type.value} value={type.value}>
                {type.name}
              </option>
            ))}
          </select>
        ) : null}
      </div>
      <div className="request-body-window-wrapper">
        {bodyMode === "none" ? (
          <None />
        ) : bodyMode === "form-data" ? (
          <FormData />
        ) : bodyMode === "x-www-form-urlencoded" ? (
          <UrlEncoded />
        ) : bodyMode === "raw" ? (
          <Raw />
        ) : bodyMode === "binary" ? (
          <Binary />
        ) : null}
      </div>
    </div>
  );
};
