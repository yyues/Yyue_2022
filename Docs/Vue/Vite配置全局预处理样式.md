---
lang: zh-CN
title: Vite配置指南
description: Vite配置指南
---

### Vite全局预处理样式基础文件配置

首先，我们看看Vite官方的文档是怎么说的

```js
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`
      }
    }
  }
})
```



**有成功案例**



上诉文件是我基于vite + ts + less 实现成功的。

**但是** ，在最近的文件配置中，失败了，

- 一开始以为scss文件我用的是sass

```js
sass: {
        additionalData: `@import'@/style/base.scss' ;`
      }
```

我是这样引用的但是，没有报错也没有成功。

所以很无奈

- 再然后，我安装了scss和loader ，还是报错了，`@use rules must be written before any other rules.`

  报了这个错误，奇奇怪怪，后来在网上找到了解决方案

```js
css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/style/base.scss' as *;`
      }
    }
  },
```

使用的是`@use` 而不是 `@import`

至此，配置很成功，没有了bug

::: warning 注意 

- 此刻我并没有卸载scss和 sass的  loader
- 上一条测试 没有受到  loader   的影响

:::
