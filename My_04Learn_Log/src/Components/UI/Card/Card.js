import React from 'react';
import './Card.css';

const Card = (props) => {
    // props.children 表示组件的标签体
    // className={`card ${props.className}`} 接收子元素传过来的className
    return <div className={`card ${props.className}`}>{props.children}</div>
};

export default Card;