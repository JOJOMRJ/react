import React from 'react';
import './Content.css'

function Content(props) {
  return (
    <div className='content'>
      <h2 className='desc'>{props.desc}</h2>
      <div className='time'>{props.time}m</div>
    </div>
  );
}

export default Content;