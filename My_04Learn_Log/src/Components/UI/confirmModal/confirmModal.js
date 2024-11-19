import React from "react"
import "./confirmModal.css"
import Card from "../Card/Card"
import Backdrop from "../Backdrop/Backdrop"
const ConfirmModal = props => {
  return (
    <Backdrop>
      <Card className="confirmModal">
        <div className="confirmText">
          <div>{props.confirmText}</div>
        </div>
        <div className="confirmButton">
          <button className="ok" onClick={props.onOk}>确认</button>
          <button onClick={props.onCancle}>取消</button>
        </div>
      </Card>
    </Backdrop>
  )
}

export default ConfirmModal