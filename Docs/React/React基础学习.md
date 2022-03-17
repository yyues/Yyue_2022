### React基础学习

react 基本特征（个人总结）

- JSX 的开发模式
- 良好的TS支持
- 编程式、声明式开发
- MVC架构模式
- 小驼峰命名式开发
- 单向数据绑定

### 同 `vue`的区别及注意事项

- 数据绑定使用 `{}`，`vue`则是使用 `{{}}`
- 使用 `className`而不是 `class`
- 数据刷新使用 `setState`
- 事件名是小驼峰写法，例如 ： `onClick`
- 没有vue的指令，而依靠js能力实现
- 组件名称必须是大写的

### 列表渲染

对数组进行 map 遍历，并给定 key 值

### 行内样式 和 classname

className 指定样式名， style行内样式主要用来绑定动态样式

### class组件/有状态组件    

重点是处理事件中的this指向问题

- 必须提供render()

- 组件必须以大写字母开头

  

### 函数组件 / 无状态组件

- 约定1： 函数组件必须以**大写字母**开头
- 约定2：函数组件必须有返回值


基础快捷键 `rcc`，需要vscode插件

函数组件没有this

<u>函数组件没有 state ，只负责数据展示</u>

### 事件绑定

类似原生，on+事件名称，小驼峰命名

React的事件对象叫<u>合成事件</u>

### State

- 只能在class组件下使用
- 不能够直接修改 state的值，只能通过 setState 来修改

### setState

- 用来更新state数据，没有传参也会刷新数据，就是更新UI

严格来说，setState并不是单纯的同步或异步，按场景来区分

- 异步

  ​	在 **合成事件** 和 **生命周期钩子（除 componentDidUpdate）**是异步的

- 同步

   在 **原生事件** 和 **setTimeout** 中是同步的

setState有函数式写法和对象式写法，官方推荐使用函数式

```react
this.setState(state=> ({count: state.count + 100 }) )
```

### class组件里的事件绑定

class组件事件处理函数，使用this会爆粗，一般来说使用bind或者箭头函数来解决

### 受控组件

一般指向表单元素，用来控制表单的输入内容

类比 v-model 而言，就是一个单项绑定数据的实现，

### 非受控组件

一般来说使用 ref 来解决不受控组件的状态值

注意ts下类型声明问题即可，其他参照 vue ref

### Props

prop可以传递任意参数，包括函数和组件

目前没尝试 传递 className组件会怎么区分？

和 vue 一样，不要尝试任何 修改props的操作

类组件中， 需要super(props)，否则在 构造函数中 不能 访问到 props， 但是其他地方可以访问到 props

### 父子组件通信

#### 父传子

- props
- redux

#### 子传父

-  redux

- props

  原理上和 vue差不多，是父组件提供回调函数，子组件调用回调函数，这其实就是利用props能够传递函数来解决子传父的问题，，vue 参考 该实现，但是对于子传父做了更进一层的封装

兄弟组件通信

- redux

- 给他们找同一个爹

  这个就不用看了，不如使用 redux

### Context

​	解决多层嵌套组件通信问题，类似于 vue的 provide，inject，使用方法

1. 调用React. createContext()创建 Provider(提供数据）和Consumer(消费数据）两个组件。

   ```react
   const { Provider,consumer } = React.createcontext()
   ```

2. 使用Provider 组件作为父节点

   ```react
   <Provider>
     <div className='demo'></div>
   </Provider>
   ```

3. 在 Provider 标签下使用 value 传递 要 传递的属性值

   ```react
   <Provider value='qqq'>
   ```

4. 使用 Consumer 组件接受数据

   ```react
   <Consumer>
   	{(data)=> console.log('接受的数据',data)}
   </Consumer>
   ```

### Props中的 children 属性

当一个组件标签内有数据的时候，会自动将标签中的内容传递给子组件， 和 vue 的 slot 类似，不知是否能处理点击事件啥的

### Props 校验

- 在 ts 模式下， 使用 ts 定义类型，可以实现类型校验
- 使用 react 提供的 prop-types 进行校验

简单介绍使用规则

1. 限制 数字

   ```react
   PropTypes.number
   ```

2. 限制数据必填

   ```react
   PropTypes.number.isRequired
   ```

3. 限制指定对象结构

   ```react
   PropTypes.shape({
   	foo: PropTypes.string,
   	bar: PropTypes.number
   })
   ```

### Prop 默认值

存在组件 app

- 通过 app.defaultProp 设置默认值
- es6 语法也可以的，就像给的函数默认值一样使用

### 组件生命周期函数（只有 class 组件才有生命周期）- 17.0版本之前

#### constructor-创建时

- 最先执行，用来初始化 state，为事件处理程序绑定this

#### render-创建时

- 每次渲染的时候都会被触发，用来刷新界面UI
- 注意， 不能再 render 中使用 setState()函数

#### componentDidMount-创建时

- 组件挂载完成后
- 可以用来发送网络请求 和 DOM操作

------

#### render-更新时

​	会有三种情况使得 组件更新

- new Props 新的参数
- setState 更新数据
- forceUpdate() 强制刷新数据

#### componentDIdUpdate-更新时

- 更新完成后触发
- 网络请求和 dom操作
- 注意，在该钩子函数内，setState必须放在 if 语句中，否则会导致递归更新

#### componentWillUnmount-卸载时

- 组件从页面消失时触发
- 用来清除定时器等

### render-props 组件

定义

- 以组件 为 返回值的 组件，
- 可以理解为 vue 的 slot 实现，但只是简单的版本

利用 prop 提供回调函数的功能，用来实现组件复用的功能。

简单实现

- 定义一个 prop 函数，用来实现渲染 定制的结构-用来进行重复功能的不同实现
- 子组件内实现 这个 props 函数， 将子组件的数据 回调给父组件
- 父组件根据 获得的数据渲染想要实现的功能

Tips

- 更推荐 children 函数，因为写在标签内的结构会作为 children 的prop传递给子组件
- 有限制，要求标签内必须是个函数，且有返回值，且返回值必须为 jsx 的结构
- 和 vue 的 slot 相比， 不够方便，且 实现也相对简单

优化

- 对prop检验，函数，且必须需要
- 子组件卸载时，移除任何时间绑定，定时器等

代码示例，免得忘记了

```react
import React, { Component, Fragment } from 'react'

class ChildRenComponent extends Component {
  render() {
    const children = this.props.children as Function
    return <Fragment>{children()}</Fragment>
  }
}

// 定义展示的组件
export default class RenderProp extends Component {
  render() {
    return (
      <Fragment>
        <ChildRenComponent>
          {() => (
            <Fragment>
              <button>222</button>
            </Fragment>
          )}
        </ChildRenComponent>
      </Fragment>
    )
  }
}

```

> PS： 上诉代码使用控制台会打印报错，尽量不使用该方式

### 高阶组件

 概述

- 用来实现状态逻辑复用

- 采用 **包装（装饰模式）**
- 增强 组件功能

介绍

- 高阶组件是一个**函数**,接受要被包装的组件，返回增强后的组件
- 高阶组件内部创建一个类组件，在这个类组件提供 **复用的状态逻辑**代码，通过 prop将复用的状态传递给被包装组件 WrappedComponent

```react
const EnhanceComponent = withHoc(WrappedComponent)
// 高阶组件内部创建的类组件
Class Mouse extends React.Component {
    render(){
        return <WrappedComponent {...this.props} {...this.state} />
    }
}
```

使用步骤

1. 创建一个函数 ，名称约定 **<u>以 with开头</u>**
2. 指定函数参数， 参数应该以大写字母开头（作为要渲染的组件）
3. 在函数内部创建一个类组件，<u>提供 服用的状态逻辑代码</u> ，并返回该类组件
4. 在该组件内，渲染参数组件，同时将状态通过prop 传递给参数组件
5. 调用该高阶组件，传入要增强的组件，通过返回值拿到增强后的组件，并渲染到界面

```react
function withMouse(WrappedComponent){
    class Mouse extends React.Component{}
    
    // 设置组件 displayName，以做区分
    Mouse.displayName = `withMouce${getName(wrappedComponent)}`
   
    function getName(data){
        return data.displayName || data.name || `component`
    }
     // 返回该类组件
   	return Mouse
}
```

```react
// Mouse 组件 的 render 方法中：
return <WrappedComponent {...this.state} />
```

```react
// 创建组件
const MousePosition = withMouse(Position)

// 渲染组件
<MousePosition />
```

注意

- 高阶组件将复用的状态通过 prop传递给要被包装的组件
- 需要设置 displayName，不然复用时会显示相同标签，因为react 默认 函数名，作为组件标签
- 还需要传递 被包装组件的 props ，使用 es6 语法合并即可

### 路由

- Router组件：包裹整个应用，一个 react 应用只需要使用一次
- 两周常用Router，HashRouter 和 BrowserRouter

------

- Link组件， 用来进行路由条状，和 vue 的router-link 类似
- 最终会会被编译成 a 标签

------

- Route 组件， 指定路由展示组件相关信息

参数

- path 指定路径，路由规则
- component 指定展示组件

### 路由执行过程

1. 点击 Link 标签，修改浏览器 地址的url
2. React 监听到 地址栏url 的变化
3. React 内部遍历所有Route 组件，使用路由规则和 pathname 进行匹配

### 编程式导航

使用

```react
this.props.history.push('/home')
```

### 匹配模式

- 受模糊匹配的影响，可能会匹配到多个

- 使用精确匹配，

  ```react
  <Route exact />
  ```

### 嵌套路由

- 嵌套路由 -- 子路由必须以父组件路由path开头

