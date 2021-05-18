import * as React from "react";
import "./App.css";
import { Request } from "./components/Request";

const App = () => {
  const [response, setResponse] = React.useState({});

  React.useEffect(() => {
    window.addEventListener("message", (event) => {
      setResponse(event.data);
    });
  }, []);

  console.log(response);

  return (
    <div className="App">
      <Request />
    </div>
  );
};

export default App;
