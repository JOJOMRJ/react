import Logs from "./Components/Logs/Logs"
import LogsForm from "./Components/LogsForm/LogsForm";
import './App.css'
import { useState } from "react";

const App = () => {
    // 模拟一组从服务器中加载的数据 (要用state 因为数据发生变化之后需要触发重新渲染)
  const [logsData,setLogsData] = useState([
    {
      id:"001",
      date: new Date(2021,1,20,18,30),
      desc: '学习九阳神功',
      time:30
    },
    {
      id:"002",
      date: new Date(2021,2,10,12,30),
      desc: '学习降龙十八掌',
      time:20
    },
    {
      id:"003",
      date: new Date(2021,2,21,11,30),
      desc: '学习Js',
      time:40
    }
  ])

  // 定义存数据的函数
  const saveLogHandler = (newLog) => {
    // 向新的logs中添加id
    newLog.id = Date.now()+""
    setLogsData([newLog, ...logsData])
  }
  return <div className="app">
          {/*引入LogsForm*/}
          {/* 把存数据的函数传下去接收数据 */}
          <LogsForm onSaveLog={saveLogHandler}/>
          <Logs logsData={logsData}/>
         </div>
}

export default App