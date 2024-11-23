import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [counterVisible, setCounterVisible] = useState(true);

  useEffect(function () {
    setInterval(function () {
      setCounterVisible(!counterVisible)
    }, 5000)
  }, [])


  return (
    <>
      hi
      {/* {counterVisible ? <Counter></Counter> : null} */}

      {counterVisible && <Counter></Counter>}
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0)

  console.log("counter");


  useEffect(function () {
    console.log("on mount");

    let clock = setInterval(function () {
      console.log("from inside setInterval");

      setCount(count => count + 1);
    }, 1000);
    return function () {
      console.log("on unmount");

      clearInterval(clock)
    }
  }, [])


  function handleClick() {
    setCount(count + 1);
  }


  return (
    <div>
      <h1 id="text">{count}</h1>
      <button onClick={handleClick}>Increase Counter</button>
    </div>
  )

}

export default App
