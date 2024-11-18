import LogItems from "./LogItems/LogItems.js"
import "./Logs.css"
import Card from "../UI/Card/Card";
// 日志的容器
const Logs = (props) => {
  const logItemData = props.logsData.map(item => <LogItems key={item.id} date={item.date} desc={item.desc} time={item.time}/>)
  return (
    //   把className 传给Card
    <Card className="logs">
      {logItemData}
    </Card>
  )}

export default Logs