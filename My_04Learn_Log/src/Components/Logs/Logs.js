import LogItems from "./LogItems/LogItems.js"
import "./Logs.css"
import Card from "../UI/Card/Card";
import LogFilter from "./LogFilter/LogFilter.js";
import { useState } from "react";
// 日志的容器
const Logs = (props) => {
  // 存储年份
  const[year, setYear] = useState(2022)
  // 修改年份函数
  const changeYearHandler = (year) => {
    setYear(year)
  }
  // 过滤数据 只显示某一年
  let filterData = props.logsData.filter(item => item.date.getFullYear() === year)

  let logItemData = filterData.map((item) => <LogItems 
                                                                onDelLog={()=>props.onDelLog(item.id)} 
                                                                key={item.id} 
                                                                date={item.date} 
                                                                desc={item.desc} 
                                                                time={item.time}/>)
  if(logItemData.length === 0) {
    logItemData = <p className="no-logs">请添加日志</p>
  }
  return (
    //   把className 传给Card
    <Card className="logs">
      {/* 引入年份选择组件 */}
      <LogFilter current={year} onChangeYear = {changeYearHandler}/>
      {
        // logItemData.length !== 0 ? logItemData : <p className="no-logs">请添加日志</p>
        logItemData
      }
    </Card>
  )}

export default Logs