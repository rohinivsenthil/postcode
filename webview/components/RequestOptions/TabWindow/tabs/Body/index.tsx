import * as React from "react";
import { BodyTabBar } from "./TabBar";
import { bodyTypes } from "../../../../../constants/body-types";

export const Body = () => {
  const [selected, setSelected] = React.useState(bodyTypes[0].value);
  return (
    <div>
      <BodyTabBar selected={selected} setSelected={setSelected} />
    </div>
  );
};
