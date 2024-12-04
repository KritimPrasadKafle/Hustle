import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  function increaseCount() {
    setCount(count + 1);
  }

  // setInterval(increaseCount, 1000);
  useEffect(() => {
    setInterval(increaseCount, 1000);
  }, [count])

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ background: "red", borderRadius: 20, width: 20, height: 25, paddingLeft: 10, paddingTop: 5 }}>
          {count}

        </div>

      </div>

    </>
  )
}

export default App
