import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

const ColoredTooltip = () => {
  return <span style={{ color: "orange" }}>Colored</span>
}

function App() {
  return (
    <div className="App">
      <p>qiuzhi99</p>
      <Tippy content="Hello">
        <button>My button</button>
      </Tippy>
      <br />
      <Tippy content={<ColoredTooltip />}>
        <button>My button</button>
      </Tippy>
    </div>
  )
}

export default App
