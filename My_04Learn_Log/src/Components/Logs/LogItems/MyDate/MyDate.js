import React from 'react'
import './MyDate.css'
import Card from "../../../UI/Card/Card";

function MyDate(props) {
    const month = props.date.toLocaleString(undefined, { month: 'long' });
    const day = props.date.toLocaleString(undefined, {day: '2-digit'})
    return (
    <Card className='date'>
      <div className='month'>{month}</div>
      <div className='day'>{day}</div>
    </Card>
  )
}

export default MyDate