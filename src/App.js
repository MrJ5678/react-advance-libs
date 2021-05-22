import CountUp, { useCountUp } from "react-countup"

function App() {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 10000,
  })
  return (
    <div className="App">
      <div>
        <div>{countUp}</div>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </div>
      <CountUp end={100} />
      <br />
      <CountUp end={200} duration={5} />
    </div>
  )
}

export default App
