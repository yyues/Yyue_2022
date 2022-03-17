---
lang: zh-CN
title: Vite配置指南
description: Vite配置指南
---

### 让我们抄袭官方文档吧!!!

这里使用的是 [`vite-plugin-svg-icons`](https://github.com/anncwb/vite-plugin-svg-icons/blob/main/README.zh_CN.md)

官方的介绍是这样的

---

用于生成 svg 雪碧图

- **预加载** 在项目运行时就生成所有图标,只需操作一次 dom
- **高性能** 内置缓存,仅当文件被修改时才会重新生成

---

::: tip

​ 基于个人的理解是有写问题的，雪碧图 ？？？

:::

依赖安装就不写了

```js
import viteSvgIcons from 'vite-plugin-svg-icons'
import path from 'path'

export default () => {
  return {
    plugins: [
      viteSvgIcons({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      })
    ]
  }
}
```

### 在`vue`中使用

单文件位置：`/src/components/SvgIcon/index.vue`

```vue
<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon'
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#333'
    }
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    return { symbolId }
  }
})
</script>
```

### main 配置

```js
// 导入svg注册脚本
import 'virtual:svg-icons-register'
// @ts-ignore
import SvgIcon from './components/Common/SvgIcon/index.vue'

const app = createApp(App)
app.component('SvgIcon', SvgIcon)
```

然后运行成功

![成功案例](~@/img/svgSuccess.png)
