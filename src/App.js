import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const notify = () => {
    toast("wow so easy!")
  }

  return (
    <div className="App">
      <button onClick={notify}>Notify</button>
      <ToastContainer position="top-left" hideProgressBar />
    </div>
  )
}

export default App
