import * as React from "react";
import "./App.css";
import { Request } from "./components/Request";

const App = () => {
  const [response, setResponse] = React.useState({});

  React.useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.data.type === "response") {
        setResponse(event.data);
      }
    });
  }, []);

  return (
    <div className="App">
      <Request response={response} />
    </div>
  );
};

export default App;
