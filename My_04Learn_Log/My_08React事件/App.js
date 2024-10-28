import React from 'react'

function App() {
  const clickHandler = (event)=>{
    event.preventDefault() // 取消默认行文
    event.stopPropagation()// 取消冒泡  事件冒泡是把事件传递给父元素 event.stopPropagation会阻止事件向父元素传递
    alert('我是clickHandler')
  }
  return (
    <div style={{width:200, height:200, margin:'100px auto', backgroundColor:'pink'}} onClick={()=>{alert('div')}}>
      <button onClick={()=>{alert(123)}}>点我一下</button>
      <button onClick={clickHandler}>哈哈</button>
      <br />
      <a href='http://www.baidu.com' onClick={clickHandler}>超链接</a>
      {/* 
        在react中事件需要通过元素的属性来设置，
        和原生js不同，React中时间的属性要使用驼峰命名法：
          onclick -> onClick
        属性值不能直接执行代码，而是需要一个回调函数：
          onCLick={()=>{alert(123)}} */}
    </div>
  )
}

// 原生Dom绑定事件复习
//  <button onclick = "alert(123)">点我一下</button>

// <button id="btn01">点我一下</button>
// document.getElementById('btn01').onclick = function(){}

// document.querySelector('btn01').addEventListener('click', function(){})

export default App