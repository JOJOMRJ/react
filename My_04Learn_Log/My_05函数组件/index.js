/* 
    组件
        - 两种
        - 函数式组件
            - 发布会jsx的普通函数
            - 组件首字母必须是大写
        - 类组件
*/
import ReactDOM from "react-dom/client"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById('root'))
// react 组件可以直接通过jsx渲染
root.render(<App />);