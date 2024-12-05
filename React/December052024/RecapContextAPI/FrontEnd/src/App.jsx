import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>

    </>
  )
}

function Increment() {
  function increase() {
    setCount(c => c + 1);
  }
  return (
    <div>

      <button onClick={increase}>Increase</button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      {count}
      <Decrement />
      <Increment />
    </>
  )
}

function Decrement() {

  function decrease() {
    setCount(c => c - 1);
  }
  return (
    <div>
      <button onClick={decrease}>Decrement</button>
    </div>
  )
}




export default App
