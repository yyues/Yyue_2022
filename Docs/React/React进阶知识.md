### setState() 的说明

- setState 是**<u>异步</u>**的

- 使用的时候，后面的 setState不要依赖于前面的setState

- 尽量只在一个事件处理函数中调用一次setState

- 可以多次调用 setState，但只会触发一次重新渲染

### setState 第二个参数

语法形式

```js
setState(update,[,callback])
```

作用

- ​	回调函数，会在更新数据后立刻执行

### JSX语法转化过程

- JSX 语法仅仅是 createElement()方法的语法糖形式
- JSX语法会被 @babel/preset-react插件编译为createElement()语法
- React元素：是一个对象，用来描述在屏幕上显示的内容

### 组件更新机制

- setState 可以更新组件 UI
- 过程：父组件重新渲染时，也会重新渲染子组件，但只会渲染当前组件子树，即当前组件及其所有子组件

### 虚拟DOM 和 Diff 算法

- React 更新视图的思想是 只要 state变化就重新渲染视图
- 特点：非常清晰
- 问题：只有一个DOM需要更新时，也会把整个页面重新渲染的 ----不会的
- 理想状态： <u>部分更新</u>，只更新 变化的地方
- 问题：React是怎么更新的？

虚拟DOM：

- 本质上就是一个JS对象，用来描述在屏幕上显示内容

执行过程：

1. 初始渲染时，React会根据初始state(Model)，创建一个**虚拟DOM对象（树）**

2. 根据虚拟DOM生成真正的DOM，渲染到界面

3. 当数据变化后（setState()），重新根据新的数据，创建新的虚拟DOM对象(树)

4. 与上一次得到的虚拟DOM对象，使用Dif算法对比，得到需要更新的内容

5. 最终，React只将 <u>变化的内容</u>更新(patch)到DOM中，重新渲染界面

   
