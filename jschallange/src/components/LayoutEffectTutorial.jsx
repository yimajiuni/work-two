import React, { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "hello";
  }, []);

  return (
    <div>
      <input ref={inputRef} value="YES" style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffectTutorial;
