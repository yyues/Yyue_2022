### `Vue2.0`实现原理

- 发布-订阅模式对数据监听
- 基于 `ES5` 的 `defineProperty`来劫持数据

首先实现一个`发布-订阅`模式

```js
let Dep = {
  // 订阅器模型
  clientList: {}, // 订阅容器
  listen: function (key, fn) {
    // 短路表达式
    // 下述表达式为， 如果clientList[key] 存在，则 push ，
    // 不存在的话，令clientList[key] = [], 再 push
    this.clientList[key] || (this.clientList[key] = []).push(fn)
  },
  trigger: function () {
    let key = Array.prototype.shift.call(arguments),
      fns = this.clientList[key]
    if (!fns || fns.length === 0) return false
    // 这里fn是新建参数
    for (let i = 0, fn; (fn = fns[i++]); ) {
      fn.apply(this, arguments)
    }
  }
}
```

然后实现数据劫持，其中需要做到捕获数据改变

```js
let dataHandle = function ({ data, tag, key, selector }) {
  let value = '',
    el = document.querySelector(selector)

  Object.defineProperty(data, key, {
    get() {
      return value
    },
    set(val) {
      value = val
      //  发布
      Dep.trigger(tag, val)
    }
  })
  // 想要发布，就需要先订阅
  Dep.listen(tag, function (text) {
    // 像是集中操作
    el.innerHTML = text
  })
}
```

应用

```js
let obj = {}
dataHandle({
    data: obj,
    tag: 'view-1',
    key: 'one',
    selector: '.box-1'
})
dataHandle({
    data: obj,
    tag: 'view-2',
    key: 'two',
    selector: '.box-2'
})
```

然后通过修改对象的值就能够动态更新视图

```js
obj.one = 'first'
obj.two = 'second'
```
