import React, { useState } from "react";
import Button from "../components/atoms/button";
import { useCounter } from "../hook/useCounter";

const Counter = () => {
  const { current, increment, decrease } = useCounter();
  return (
    <div>
      <div>現在の値：{current}</div>
      <Button onClick={() => increment()}>+1 する</Button>
      <Button onClick={() => decrease()}>-1 する</Button>
    </div>
  );
};

export default Counter;
