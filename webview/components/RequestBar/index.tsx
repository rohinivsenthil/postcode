import * as React from "react";
import "./styles.css";
import { RequestMethodSelector } from "../../features/requestMethod/RequestMethodSelector";
import * as propTypes from "prop-types";
import { useAppDispatch } from "../../redux/hooks";
import { responseLoadingStarted } from "../../features/response/responseSlice";

export const RequestBar = (props) => {
  const { requestUrl, setRequestUrl, sendRequest } = props;
  const dispatch = useAppDispatch();
  return (
    <form
      className="request-bar"
      onSubmit={(e) => {
        sendRequest();
        if (requestUrl !== "") {
          dispatch(responseLoadingStarted());
        }
        e.preventDefault();
      }}
    >
      <RequestMethodSelector />
      <input
        type="text"
        id="request-url"
        name="request-url"
        placeholder="Enter request URL"
        className="input-request-url"
        value={requestUrl}
        onChange={(e) => setRequestUrl(e.target.value)}
      />
      <button
        name="request-send"
        id="request-send"
        type="submit"
        className="button-request-send"
      >
        Send
      </button>
    </form>
  );
};

RequestBar.propTypes = {
  requestUrl: propTypes.string.isRequired,
  setRequestUrl: propTypes.func.isRequired,
  sendRequest: propTypes.func.isRequired,
};
