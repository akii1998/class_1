import React, { useState, useEffect } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  const [toggel, settoggel] = useState(false);
  let stop;

  useEffect(() => {
      if (toggel) {
        console.log("yes");
      stop =setInterval(()=>{
        setCount(count+1)
      },1000)
      }

      return () => clearInterval(stop);
      }, 
    [toggel,count]
  );

  function handleSo() {
  
  clearInterval(stop)
  settoggel(false)
  }
  function handRe() {
    settoggel(false)
    setCount(0);
;
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => settoggel(true)}>Start</button>
      <button onClick={handleSo}>Stop</button>
      <button onClick={handRe}>Reset</button>
    </div>
  );
}

export default Effect;
