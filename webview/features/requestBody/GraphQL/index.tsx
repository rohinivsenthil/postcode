import * as React from "react";
import "./styles.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  requestBodyGraphqlQueryUpdated,
  requestBodyGraphqlVariablesUpdated,
  selectRequestBodyGraphqlQuery,
  selectRequestBodyGraphqlVariables,
} from "../requestBodySlice";

const Editor = React.lazy(() => import("../../../shared/Editor"));

export const GraphQL = () => {
  const query = useAppSelector(selectRequestBodyGraphqlQuery);
  const variables = useAppSelector(selectRequestBodyGraphqlVariables);
  const dispatch = useAppDispatch();

  return (
    <div className="gql-wrapper">
      <div className="gql-section">
        <div className="gql-section-heading">QUERY</div>
        <React.Suspense fallback={<div>loading</div>}>
          <Editor
            className="gql-editor"
            value={query}
            language="graphql"
            onChange={(data) => dispatch(requestBodyGraphqlQueryUpdated(data))}
          />
        </React.Suspense>
      </div>
      <div className="gql-section">
        <div className="gql-section-heading">VARIABLES</div>
        <React.Suspense fallback={<div>loading</div>}>
          <Editor
            className="gql-editor"
            value={variables}
            language="json"
            onChange={(data) =>
              dispatch(requestBodyGraphqlVariablesUpdated(data))
            }
          />
        </React.Suspense>
      </div>
    </div>
  );
};
