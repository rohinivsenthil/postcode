/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import "./styles.css";

export const Params = () => {
  return (
    <div className="params-wrapper">
      <table>
        <tr>
          <td>
            <div contentEditable>Im editable</div>
          </td>
          <td>
            <div contentEditable>Im also editable</div>
          </td>
        </tr>
        <tr>
          <td>Im not editable</td>
          <td>Im not editable</td>
        </tr>
      </table>
    </div>
  );
};
