import { useState } from "react"
import DatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import zhCN from "date-fns/locale/zh-CN"
registerLocale("zh-CN", zhCN)

function App() {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div className="App">
      <DatePicker
        locale="zh-CN"
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        isClearable
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 1}
      />
    </div>
  )
}

export default App
