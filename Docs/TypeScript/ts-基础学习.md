### 构建ts环境

单独在文件下配置TypeScript依赖

```
yarn add typescript --dev
```

或者

```
npm i typescript -D
```

### 运行ts程序

```
yarn tsc 文件名
```

或者

```
npm tsc 文件名
```

### 生成ts配置文件

```
yarn tsc --init
```

或者

```
npm tsc --init
```

------

以后皆用yarn作为管理工具

------

ts配置文件，基础配置参考项目生成文件，

### TypeScript 说明

- 因为 `tsconfig` 的 `target` 配置选项，在其为 `es5` 的条件下， 不支持 `ES6` 标准库，从而会导致 如 `Symbol`、 `Promise` 等 标准库会报错，所以需要额外配置 `tsconfig` 下 `lib` 的配置选项
- 在第一条的配置条件下，配置 `lib` 为 `ES2015`， 会导致 `console`报错，所以需要在添加 `DOM`标准库
- 标准库就是内置对象所对应的申明，可以理解为没有申明就是导致报错提示