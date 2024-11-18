import LogItems from "./LogItems/LogItems.js"
import "./Logs.css"
import Card from "../UI/Card/Card";
// 日志的容器
const Logs = (props) => {
  let logItemData = props.logsData.map((item,index) => <LogItems 
                                                                onDelLog={()=>props.onDelLog(index)} 
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
      {
        // logItemData.length !== 0 ? logItemData : <p className="no-logs">请添加日志</p>
        logItemData
      }
    </Card>
  )}

export default Logs