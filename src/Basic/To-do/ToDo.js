import React from "react";
import { useState } from "react";
import { useRef } from "react";

export default function Todolist() {
  const [data, setData] = useState([]);
  const getDataRef = useRef();

  const geDataadd = () => {
    if (getDataRef.current.value === "") {
      return;
    }
    setData([getDataRef.current.value, ...data]);
    getDataRef.current.value = "";
  };

  return (
    <>
      <section>
        <h1>Add Some one</h1>
        <label>
          <input ref={getDataRef} />
        </label>
        <button onClick={geDataadd}>Submit</button>
      </section>

      <section>
        <ol>
          {data.map((e, i) => {
            return (
              <>
                <li id={i}>
                  {e}
                  <button>Delete</button>
                </li>
              </>
            );
          })}
        </ol>
      </section>
    </>
  );
}
