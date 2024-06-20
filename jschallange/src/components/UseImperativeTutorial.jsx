import React, { useRef } from "react";
import Button from "./Button";

function UseImperativeTutorial() {
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.altToggle();
        }}
      >
        button from parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default UseImperativeTutorial;
