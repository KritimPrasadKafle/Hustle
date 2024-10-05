import { useState } from 'react';

export function UpdatingScreen() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Submit</button>
    </>
  )
}