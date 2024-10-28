import React from 'react'
import MyDate from './MyDate/MyDate'
import './LogItems.css'
import Content from './Content/Content'

function Logitems() {
  return (
    <div className='item'>
      <MyDate />
      <Content />
    </div>
  )
}

export default Logitems
