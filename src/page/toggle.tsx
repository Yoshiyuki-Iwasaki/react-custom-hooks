import React, { useState } from "react";
import { ToggleButton } from "../components/atoms/button";
import { useToggleState } from "../components/atoms/button/hooks";

const Counter = () => {
  const [state, toggle] = useToggleState(false);
  return (
    <div>
      <div>現在の値: {state ? "true" : "false"}</div>
      <ToggleButton onClick={() => toggle}>ToggleButton</ToggleButton>
    </div>
  );
};

export default Counter;
