import ReactDOM from 'react-dom/client'
// 引入css
import './index.css'

// 创建一个react元素
const App = 
<div className='Logs'>
  {/* 日志项 */}
  <div className='item'>
    {/* 日期的容器 */}
    <div className='date'>
      <div className='month'>
        四月
      </div>
      <div className='day'>
        20
      </div>
    </div>

    {/* 日志内容 */}
    <div className='content'>
      <h2 className='desc'>学习react</h2>
      <div className='time'>40m</div>
    </div>
  </div>
</div>

// 获取根元素
const root = ReactDOM.createRoot(document.getElementById("root"))

// 渲染元素
root.render(App)