import Modal from "react-modal"
import { useState } from "react"

Modal.setAppElement("#root")
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className="App">
      111
      <button onClick={() => setModalIsOpen(true)}>open modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: { background: "grey", opacity: "0.8" },
          content: { color: "green" },
        }}
      >
        <h2>Modal title</h2>
        <p>Modal Body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>close</button>
        </div>
      </Modal>
    </div>
  )
}

export default App
