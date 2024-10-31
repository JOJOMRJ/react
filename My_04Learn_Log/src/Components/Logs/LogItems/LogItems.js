import React from 'react'
import MyDate from './MyDate/MyDate'
import './LogItems.css'
import Content from './Content/Content'

function LogItems(props) {
  return (
    <div className='item'>
      <MyDate date={props.date} />
      <Content time={props.time} desc={props.desc} />
    </div>
  )
}

export default LogItems
