import React, { useState } from "react";
import axios from "axios";
import Child from "./Child";

function CallbackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("dripping pointe");
  // store memorized function not data like useMemo
  const returnComment = () => {
    return data;
  };

  return (
    <div>
      <Child returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {""}
        toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  );
}

export default CallbackTutorial;
