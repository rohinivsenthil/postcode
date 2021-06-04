import * as React from "react";
import "./App.css";
import { responseUpdated } from "./features/response/responseSlice";
import { Postcode } from "./pages/Postcode";
import { useAppDispatch } from "./redux/hooks";

const App = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.data.type === "response") {
        dispatch(responseUpdated(event.data));
      }
    });
  }, []);

  return (
    <div className="App">
      <Postcode />
    </div>
  );
};

export default App;
