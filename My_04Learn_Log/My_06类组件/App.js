import React, { Component } from "react";
// 类组件
// 继承react.Component
class App extends Component{

  // 必须添加一个render()方法，且方法的返回值要是一个jsx
  render(){
    return <div>我是一个类组件</div>
  }
}

export default App;