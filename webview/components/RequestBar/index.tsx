import * as React from "react";
import * as propTypes from "prop-types";
import { RequestMethodSelector } from "../../features/requestMethod/RequestMethodSelector";
import { useAppDispatch } from "../../redux/hooks";
import { responseLoadingStarted } from "../../features/response/responseSlice";
import { RequestUrl } from "../../features/requestUrl/RequestUrl";
import "./styles.css";

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
      <RequestUrl />
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
