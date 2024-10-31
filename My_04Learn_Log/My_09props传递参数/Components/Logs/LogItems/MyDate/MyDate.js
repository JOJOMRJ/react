import React from 'react'
import './MyDate.css'

function MyDate(props) {
    const month = props.date.toLocaleString(undefined, { month: 'long' });
    const day = props.date.toLocaleString(undefined, {day: '2-digit'})
    return (
    <div className='date'>
      <div className='month'>{month}</div>
      <div className='day'>{day}</div>
    </div>
  )
}

export default MyDate