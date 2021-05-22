import { Line } from "react-chartjs-2"

function App() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales fro 2020(M)",
        data: [3, 2, 2, 1, 5],
        borderColor: "rgba(255, 99, 132, 0.2)",
        backgroundColor: "rgb(255, 99, 132)",
      },
      { label: "Sales for 2019(M)", data: [1, 3, 2, 2, 4] },
    ],
  }
  return (
    <div className="App">
      <div style={{ width: 720 }}>
        <Line data={data} />
      </div>
    </div>
  )
}

export default App
