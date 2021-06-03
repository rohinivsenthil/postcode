import * as React from "react";
import "./styles.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  requestBodyBinaryUpdated,
  selectRequestBodyFile,
} from "../requestBodySlice";

export const Binary = () => {
  const binary = useAppSelector(selectRequestBodyFile);
  const dispatch = useAppDispatch();

  return (
    <div className="binary-wrapper">
      <div className="input-file-wrapper">
        <input
          type="file"
          id="myFile"
          name="filename"
          className="input-file-upload"
          onChange={(e) => {
            if (e.target.files.length) {
              e.target.files[0].text().then((data) =>
                dispatch(
                  requestBodyBinaryUpdated({
                    name: e.target.files[0].name,
                    data,
                  })
                )
              );
            }
          }}
        ></input>
        <label className="label-file-upload" htmlFor="myFile">
          Select file
        </label>
        <div>{binary}</div>
      </div>
    </div>
  );
};
