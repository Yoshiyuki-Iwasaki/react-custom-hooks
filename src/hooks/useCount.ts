import { useState, useEffect } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);
  const countUp = () => setCount(c => c + 1);

  return [count, countUp];
  // TypeScriptの場合はas constをつける
  // return [count, countUp] as const;
};
