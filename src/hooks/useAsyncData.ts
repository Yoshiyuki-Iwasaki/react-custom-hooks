import { useState, useEffect } from "react";

const useAsyncData = (promise: any) => {
  const [data, setData] = useState();

  useEffect(() => {
    promise.then((result: any) => setData(result));
  }, [promise]);

  return data;
};
