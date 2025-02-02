// import { useState } from "react";
// import React from "react";
// function Parent() {
//   const [count, setCount] = useState(0);

import { useState } from "react"

//   return (
//     <>
//       <Increase count={count} setCount={setCount} />
//       <Decrease count={count} setCount={setCount} />
//       <Value count={count} setCount={setCount} />


//     </>
//   )
// }

// function Increase({ count, setCount }) {
//   return <button onClick={() => setCount(count + 1)}>Increase</button>

// }

// function Decrease({ count, setCount }) {
//   return <button onClick={() => setCount(count - 1)}> Decrease</button>
// }

// function Value({ count }) {
//   return <p>Count: {count}</p>
// }

// const Checking = () => {
//   return <div>
//     <Parent />
//   </div>
// }

// export default Checking;

function Checking() {
  return (
    <div>
      <LightBulb />
    </div>
  )
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);

  return <div>
    <BulbState bulbOn={bulbOn} />
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />

  </div>
}

function BulbState({ bulbOn }) {
  return <div>
    {bulbOn ? "The light is on" : "The light is off"}
  </div>
}

function ToggleBulbState({ bulbOn, setBulbOn }) {
  function toggle() {
    setBulbOn(!bulbOn)
  }

  return <div>
    <button onClick={toggle}>Toggle</button>

  </div>
}

export default Checking;