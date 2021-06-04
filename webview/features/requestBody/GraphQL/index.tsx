import * as React from "react";
import { Editor } from "../../../shared/Editor";
import "./styles.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  requestBodyGraphqlQueryUpdated,
  requestBodyGraphqlVariablesUpdated,
  selectRequestBodyGraphqlQuery,
  selectRequestBodyGraphqlVariables,
} from "../requestBodySlice";

export const GraphQL = () => {
  const query = useAppSelector(selectRequestBodyGraphqlQuery);
  const variables = useAppSelector(selectRequestBodyGraphqlVariables);
  const dispatch = useAppDispatch();

  return (
    <div className="gql-wrapper">
      <div className="gql-section">
        <div className="gql-section-heading">QUERY</div>
        <Editor
          className="gql-editor"
          value={query}
          language="graphql"
          onChange={(data) => dispatch(requestBodyGraphqlQueryUpdated(data))}
        />
      </div>
      <div className="gql-section">
        <div className="gql-section-heading">VARIABLES</div>
        <Editor
          className="gql-editor"
          value={variables}
          language="json"
          onChange={(data) =>
            dispatch(requestBodyGraphqlVariablesUpdated(data))
          }
        />
      </div>
    </div>
  );
};
