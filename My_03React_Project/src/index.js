// js的入口 根据这里面的导入 最终整合成一个js
// 引入ReactDOM
import ReactDOM from 'react-dom/client';

// 创建一个JSX  webpack会自动和index.html整合
const App = <div>
  <h1>这是一个React项目</h1>
  <p>我终于有了第一个React项目了?!</p>
</div>

// 获取一个跟容器
const root = ReactDOM.createRoot(document.getElementById('root'))
// 将App渲染进跟容器
root.render(App)