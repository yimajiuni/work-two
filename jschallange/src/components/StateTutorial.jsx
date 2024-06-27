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
    //become
     const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter( counter +1);　//simulate the logic in () everytime click button
  };
  //with same return hook
  return (
    <div>
      {counter}
      <button onClick={onClick} >increment..</button>
    </div>
  );
   */
  }

  const [inputValue, setInputValue] = useState("です");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue); //change the state of value
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
