import ReactPlayer from "react-player"

function App() {
  return (
    <div className="App">
      <ReactPlayer
        width="480px"
        height="240px"
        url="https://rails365-video.oss-cn-shenzhen.aliyuncs.com/episodes/prareact/reactp01..---1080p..mp4"
        controls
      />
    </div>
  )
}

export default App
