import React, { useState } from 'react'
import MyDate from './MyDate/MyDate'
import './LogItems.css'
import Content from './Content/Content'
import Card from "../../UI/Card/Card"
import ConfirmModal from "../../UI/confirmModal/confirmModal"

function LogItems(props) {

  // 添加一个state,记录是否显示窗口
  const [showConfirm, setshowConfirm] = useState(false)


  const deleteItemHandler = () => {
    // const isDel = window.confirm("确认吗？")
    // if (isDel) {
    //   // 删除当前item实际上就是设置 App里数据列表
    //   props.onDelLog()
      
    // }
    // 显示确认窗口
    setshowConfirm(true)
  }

  // 取消删除函数
  const cancelHandler = () => {
    setshowConfirm(false)
  }
  // 确认函数
  const okHandler = () => {
    props.onDelLog()
    setshowConfirm(false)
  }
  return (
    <Card className='item'>
      {showConfirm && <ConfirmModal 
        confirmText="该操作不可恢复，请确认"
        onCancle={cancelHandler}
        onOk={okHandler} />}
      <MyDate date={props.date} />
      <Content time={props.time} desc={props.desc} />
      {/* 删除按钮 */}
      <div onClick={deleteItemHandler} className='delete'>×</div>
    </Card>
  )
}

export default LogItems
