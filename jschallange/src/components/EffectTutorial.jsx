import React, { useEffect, useState } from "react";
import axios from "axios";
const EffectTutorial = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log(response.data);
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      });
  }, []);

  return (
    <div>
      hello world {data}
      {error && <div>{error}</div>}
      <div className="kumo up"></div>
      <p className="kumo middle">こんなかんじになるよ</p>
      <div className="kumo down"></div>
    </div>
  );
};

export default EffectTutorial;
