import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(0)

  return (
    <>
      <div>
        <button onClick={() => setIsVisible(!isVisible)}>
          Toggle Message
        </button>
        {isVisible && <p>This message is conditionally rendered!</p>}
      </div>

    </>
  )
}

export default App
