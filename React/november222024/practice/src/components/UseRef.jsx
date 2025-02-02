import React, { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>

    </div>
  )
}
