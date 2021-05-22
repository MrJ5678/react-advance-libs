import { ClipLoader, ClockLoader, GridLoader } from "react-spinners"
import { css } from "@emotion/react"

const loaderCSS = css`
  margin-top: 25px;
  margin-bottom: 25px;
`

function App() {
  return (
    <div className="App">
      <p>qiuzhi99</p>
      <ClipLoader css={loaderCSS} size={24} />
      <br />
      <ClockLoader css={loaderCSS} loading size={56} color="purple" />
      <br />
      <GridLoader css={loaderCSS} size={78} />
    </div>
  )
}

export default App
