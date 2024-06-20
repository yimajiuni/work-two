import React, { useState } from "react";
//useState essensial example
//dom操作とuseStateでシステムを変える

const StateTutorial = () => {
  {
    /*
  let counter = 0;
    const increment =()=>{
      counter = counter +1;
    }
     const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(+1);
  };
    */
  }

  const [inputValue, setInputValue] = useState("です");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
