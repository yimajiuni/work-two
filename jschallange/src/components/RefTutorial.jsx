import React, { useRef } from "react";
//accsess and manupulate dom element
function RefTutorial() {
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>reactRef</h1>
      <input type="text" placeholder="ex.." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;
