### `Promise.resolve()`

- 用来创建一个 `resolve`的 `promise`，等同于
  
  ```js
  let promise = new Promise(resolve => resolve(value));
  ```

- 主要用来包装对象或者方法，来获得一个成功的 `promise`对象

- 新方法，可以用来对对象进行赋值。
  
  ```js
  let loading = Promise.resolve()
  // 具体看了一下应用，是要求一个promise，等价于 loading = null，在要求promise类型下会有用
  ```