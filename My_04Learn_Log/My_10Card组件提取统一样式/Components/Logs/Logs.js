import LogItems from "./LogItems/LogItems.js"
import "./Logs.css"
import Card from "../UI/Card/Card";
// 日志的容器
const Logs = () => {
  // 模拟一组从服务器中加载的数据
  const logsData = [
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
  ]
  return (
    //   把className 传给Card
    <Card className="logs">
      {logsData.map(item => <LogItems key={item.id} date={item.date} desc={item.desc} time={item.time}/>)}
    </Card>
  )}

export default Logs