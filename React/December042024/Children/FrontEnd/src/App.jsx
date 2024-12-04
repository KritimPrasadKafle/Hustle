import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'
import Modal from './Modals.jsx'
import Collapsible from './Collapsible.jsx'

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>

      {/* <Card children="Hello" />
      <Card children="World" /> */}

      {/* <Card>
        <h2>Card Title</h2>
        <p>This is some content inside the card.</p>

      </Card>

      <Card>
        <h2>Another Card</h2>
        <p>This is some other content inside the card.</p>
      </Card>

      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>Modal Title</h2>
        <p>This is some content inside the modal.</p>
      </Modal> */}

      <Collapsible title="Section 1">
        <p>This is the content of section 1</p>
      </Collapsible>
      <Collapsible title="Section 2">
        <p>This is the content of section 2</p>
      </Collapsible>

    </>
  )
}

export default App
