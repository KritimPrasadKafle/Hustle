import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const person = {
    name: 'Georgorio',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  return (
    <div style={person.theme}>
      <h1>{person.name}'s</h1>
      <img src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" className='avatar' />

      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>

    </div>
  );
}

export default App
