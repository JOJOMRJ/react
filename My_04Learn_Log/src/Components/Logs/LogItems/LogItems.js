import React from 'react'
import MyDate from './MyDate/MyDate'
import './LogItems.css'
import Content from './Content/Content'
import Card from "../../UI/Card/Card";

function LogItems(props) {
  const deleteItemHandler = () => {
    const isDel = window.confirm("确认吗？")
    if (isDel) {
      // 删除当前item实际上就是设置 App里数据列表
      props.onDelLog()
      
    }
  }
  return (
    <Card className='item'>
      <MyDate date={props.date} />
      <Content time={props.time} desc={props.desc} />
      {/* 删除按钮 */}
      <div onClick={deleteItemHandler} className='delete'>×</div>
    </Card>
  )
}

export default LogItems
