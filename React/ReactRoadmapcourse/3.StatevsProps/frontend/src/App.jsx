import { useState } from 'react'
import './App.css'
import { sculptureList } from './data';

function App() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex((index + 1) % sculptureList.length);  // Loop back to the first sculpture
  }

  let sculpture = sculptureList[index];
  return (

    <>


      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>


    </>





  )
}

export default App
