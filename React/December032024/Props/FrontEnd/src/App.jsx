import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const Greeting = ({ name }) => {
    return <h1>Hello, {name}!</h1>
  }

  return (
    <>
      <Greeting name="Kritim" />

    </>
  )
}

export default App