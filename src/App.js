import { FaReact } from "react-icons/fa"
import { MdAttachMoney } from "react-icons/md"
import { IconContext } from "react-icons"

const color = ["green"]
const size = ["6rem"]
function App() {
  return (
    <div className="App">
      <IconContext.Provider value={{ color: color[0], size: size[0] }}>
        <FaReact />
      </IconContext.Provider>
      <div>
        <IconContext.Provider value={{ color: color[0], size: size[0] }}>
          <MdAttachMoney />
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default App
