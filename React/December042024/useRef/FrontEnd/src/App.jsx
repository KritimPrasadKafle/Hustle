import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  }

  return (
    <>
      <div>
        <input type="text" ref={inputRef} placeholder='Click the button to focus me' />
        <button onClick={handleFocus}>Focus the Input</button>
      </div>


    </>
  )
}

export default App
