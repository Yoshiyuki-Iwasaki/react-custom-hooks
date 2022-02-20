import { useState, useEffect } from "react";

const useCurrentDate = (interval: any) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, interval);

    return () => clearInterval(timer);
  }, [setDate]);

  return date;
};
