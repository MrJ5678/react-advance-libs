import { useState } from "react"
import { ChromePicker, SketchPicker, PhotoshopPicker } from "react-color"

function App() {
  const [color, setColor] = useState("#fff")
  const [showColorPicker, setShowColorPicker] = useState(false)
  return (
    <div className="App">
      <button
        onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}
      >
        {showColorPicker ? "Close" : "Pick"}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={updateColor => setColor(updateColor)}
        />
      )}
      <h2>you pick {color.hex}</h2>
    </div>
  )
}

export default App
