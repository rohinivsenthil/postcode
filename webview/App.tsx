import * as React from "react";
import "./App.css";
import { Request } from "./components/Request";

const App = () => {
  const [response, setResponse] = React.useState({
    initial: "true",
  });
  const [loadingResponse, setLoadingResponse] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.data.type === "response") {
        setLoadingResponse(false);
        setResponse(event.data);
      }
    });
  }, []);

  return (
    <div className="App">
      <Request
        response={response}
        loadingResponse={loadingResponse}
        setLoadingResponse={setLoadingResponse}
      />
    </div>
  );
};

export default App;
