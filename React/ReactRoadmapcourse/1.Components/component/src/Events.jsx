import { useState } from "react";

function handleClick() {
  alert('You clicked button');
}

// export default function Events() {
//   return (
//     <button onClick={handleClick}> Submit</button >
//   );
// }
export default function NewFunction() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  )
}


function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>Clicked {count} times</button>
  )
}