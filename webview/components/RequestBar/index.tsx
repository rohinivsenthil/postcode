import * as React from "react";
import { RequestMethodSelector } from "../../features/requestMethod/RequestMethodSelector";
import { useAppDispatch } from "../../redux/hooks";
import { responseLoadingStarted } from "../../features/response/responseSlice";
import { RequestUrl } from "../../features/requestUrl/RequestUrl";
import "./styles.css";

export const RequestBar = () => {
  const dispatch = useAppDispatch();

  return (
    <form
      className="request-bar"
      onSubmit={(e) => {
        dispatch(responseLoadingStarted());
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
