### element 封装二层组件逻辑实现

首先考虑好逻辑，

我们要求这样的配置

- 根据路由动态生产菜单
- 根据路由层级数自动生产对应下拉选之类菜单
- 根据页面宽度自动折叠样式
- 解决样式显示问题

```vue
<component
  v-for="item in urlList"
  :key="item.name ?? item.path"
  :index="item.path"
  :is="item.children ? 'el-submenu' : 'el-menu-item'"
>
        <i v-if="!item.children" class="el-icon-search"></i>
        <template #title>
          <i v-if="item.children" class="el-icon-setting"></i>
          <span>{{ item.meta.title }}</span>
        </template>
        <div v-if="item.children">
          <component
            v-for="{ name, path, children, meta } in item.children"
            :key="name || path"
            :index="`${item.children}/${path}`"
            :is="children ? 'el-submenu' : 'el-menu-item'"
          >
            <i v-if="!children" class="el-icon-search"></i>
            <template #title>
              <i v-if="children" class="el-icon-setting"></i>
              <span>{{ meta.title }}</span>
            </template>
            <div v-if="children">
              <el-menu-item
                v-for="list in children"
                :key="list.path"
                :index="`${item.children}/${path}/${list.path}`"
              >
                <i class="el-icon-setting"></i>
                <template #title>{{ list.meta.title }}</template>
              </el-menu-item>
            </div>
          </component>
        </div>
      </component>
```

结果略显臃肿，没有好的封装模式，具体优化有待参考

### 第一层嵌套

```vue {5-8}
<component
  v-for="item in urlList"
  :key="item.name ?? item.path"
  :index="item.path"
  :is="item.children ? 'el-submenu' : 'el-menu-item'"
>
        <i v-if="!item.children" class="el-icon-search"></i>
        <template #title>
          <i v-if="item.children" class="el-icon-setting"></i>
          <span>{{ item.meta.title }}</span>
        </template>
        
      </component>
```

嵌套的逻辑无非是一样的，根据路由是否有`children`字段来判断是否展开下一层循环
::: warning 注意
图标字段应该是要配置的，这边看看具体优化，放在 meta 中实现吧

​ 注意`index`的字段

- 因为是嵌套的层级，所以每层 `index`的配置都是不一样的
- 参数默认值没有做`default`处理，`router`里没写对应可能胡报错

:::

### 页面自动折叠实现

- 说起来这个是我没有想到的，是用 window 的监听函数解决的，`vue`写多了还是不行

下面康康代码实现

```vue
onMounted(() => { window.addEventListener('resize', () => { if
(window.innerWidth < 800) { option.collapse = true } else { option.collapse =
false } }) })
```

- 代码还是有点问题的，因为代码实在`mounted` 完成的，所以第一次加载界面的时候页面不会自动折叠和展开

- `watchEffect`可以试试，
