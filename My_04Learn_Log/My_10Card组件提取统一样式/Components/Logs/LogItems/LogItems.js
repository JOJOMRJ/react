import React from 'react'
import MyDate from './MyDate/MyDate'
import './LogItems.css'
import Content from './Content/Content'
import Card from "../../UI/Card/Card";

function LogItems(props) {
  return (
    <Card className='item'>
      <MyDate date={props.date} />
      <Content time={props.time} desc={props.desc} />
    </Card>
  )
}

export default LogItems
