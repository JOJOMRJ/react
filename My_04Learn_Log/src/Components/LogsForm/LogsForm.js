import React, { useState } from 'react';
import Card from "../UI/Card/Card";
import './LogsForm.css'
const LogsForm = () => {
    // 获取用户输入内容
    // 创建变量储存用户输入数据
    const [inputDate, setInputDate] = useState('')
    const [inputDesc, setInputDesc] = useState('')
    const [inputTime, setInputTime] = useState('')

    // 创建一个响应函数，监听表单单项的变化
    const dateChangeHandler = (e) => {
        setInputDate(e.target.value)
        console.log(e.target.value);
        
    }

    const descChangeHandler = (e) => {
        setInputDesc(e.target.value)
        console.log(e.target.value);
        
    }

    const timeChangeHandler = (e) => {
        setInputTime(e.target.value)
        console.log(e.target.value);
        
    }

    // 当用户提交时 汇总表单数据
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('表单提交了');
        const newLog = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: +inputTime
        }
        console.log(newLog);
        // 清空表单
        setInputDate('')
        setInputDesc('')
        setInputTime('')
        
    }
    return (
        <Card className="logs-form">
            <form onSubmit={submitHandler}>
                <div className="form-item">
                    <label htmlFor="date" >日期</label>
                    <input onChange={dateChangeHandler} id='date' value={inputDate} type="date"/>
                </div>
                <div className="form-item">
                    <label htmlFor="desc" >内容</label>
                    <input onChange={descChangeHandler} id='desc' value={inputDesc} type="text"/>
                </div>
                <div className="form-item">
                    <label htmlFor="time">时长</label>
                    <input onChange={timeChangeHandler} id='time' value={inputTime} type="number"/>
                </div>
                <div className="form-btn">
                    <button>添加</button>
                </div>
            </form>
        </Card>
    );
};

export default LogsForm;