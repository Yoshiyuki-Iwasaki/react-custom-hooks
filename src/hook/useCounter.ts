import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrease = () => {
    setCount(prevCount => prevCount - 1);
  };

  return { current: count, increment: increment, decrease: decrease };
};
