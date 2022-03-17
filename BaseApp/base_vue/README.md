# Vue3.0

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### 3 2.0版本介绍了组件库的学习，在此版本中不做赘述



## setup

3.0版本主要的更新，组合式api ，特点‘如下

- 组件内没有this 
- 取代了2.0生命周期里的create 和 beforecreated
- 提供代码复用性

### ref

设置动态的双向绑定数据，基于proxy的实现模式。可以对于非对象的数据进行绑定，注意的是，在setup内修改时，要注意绑定value。

### reactive

负责绑定对象等复杂结构的双向绑定，能使对象内部数据也变得响应式，取值也要value，

### 自定义指令

最大的改变是v-model 要带value值

### router。vuex

新的文件import方法，createRouter 之类的实现模式

