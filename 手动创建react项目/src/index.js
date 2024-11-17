// src/index.js 是打包时的入口文件
// 引入reactDOM
import { directive } from '@babel/types';
import ReactDOM from 'react-dom/client';  //有react-dom/client 和 react-dom/server

//创建一个JSX 不用显示引用babel
const App = <div>
  <h1>这是一个React项目</h1>
  <p>我终于有了第一个react项目??</p>
</div>

// 获取跟容器
const root = ReactDOM.createRoot(document.getElementById('root'))
//将App渲染进根容器
root.render(App)