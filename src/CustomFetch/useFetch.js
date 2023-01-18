import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => error);
  }, [url]);
  return [data];
};
