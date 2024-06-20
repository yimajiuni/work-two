import React from "react";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";

function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState();

  useEffect(() => {
    axios
      .get("https//jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if ((currentName.length = longestName.length)) {
        longestName = currentName;
      }
    }
    console.log("this was computed");
    return longestName;
  };
  const getLongestName = useMemo(() => findLongestName(data), [toggle]);
  return (
    <div>
      <div>{getLongestName}</div>

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

export default MemoTutorial;
