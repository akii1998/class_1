import React from "react";
import { useFetch } from "./useFetch";

const FetchUrl = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      {data &&
        data.map((ele) => {
          return <h2 key={ele.id}>{ele.title}</h2>;
        })}
    </>
  );
};

export default FetchUrl;
