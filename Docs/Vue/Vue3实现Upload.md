

### 基于 Vue3 的 Upload 实现

网上其实有很多的教程实现，不过在实现之前，我们需要明白这些

- Upload 上传的文件是怎么传递给后端的？
- 怎么 **实时** 监听上传进度的变化 ？
- 对于 传输文件的格式，除了`FormData`是否还有其他实现模式

如上案例[Vue3实现Upload](https://www.jb51.net/article/211379.htm)

借助 百度  ，能够将 `Upload`组件的逻辑功能实现，

###  基于上传进度的改变对按钮样式的改变

经过尝试，以下代码实现了，upload 按钮背景样式的改变

```vue
<div class="i-upload" @click="handleClick">
    <input
      type="file"
      ref="inputRef"
      class="i-input"
      :multiple="multiple"
      :accept="accept"
      @change="handleFile"
    />
    <button>upload</button>
  </div>
```

上述为基础 样式版本的基础代码

```scss
$upload-color: #7d2ae8;
.i-upload {
  button {
    height: 36px;
    border: none;
    max-width: 120px;
    background-color: $upload-color;
    padding: 9px 36px;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    &::before {
      width: 120px;
      position: absolute;
      top: 0;
      left: -90%;
      transition: all 2s ease-in-out;
      height: 36px;
      content: '';
      background-color: rgba($color: #000000, $alpha: 0.2);
    }
  }
  .i-input {
    display: none;
  }
}
```

通过对`button`按钮 `::before`  来实现动态的 背景颜色改变 

关键的代码是这一行

```
left: -90%;
```

该left 偏移量可以模拟加载进度的改变

所以思路很明显： **通过改变`left`数值来实现 显示进度的功能**

还有些问题需要思考

- 针对 **上传进度曲线变化** 的情况下，即受网络程度影响 下，是否能通过该 上传进度样式  来表现出 该特殊情况
- 监听上传文件的函数是实时更新的吗，又如何 实现 监听上传进度的函数呢
- 在`vue3.2.4`版本下 能够对 css 变量进行赋值，不用在标签上 绑定样式， 对于低版本的又该如何实现呢？ 不同于常规的绑定样式，`::before`的样式能怎么绑定呢？
- 对于 显示产上传进度的样式 的样式，能否用波浪纹的样式来实现

组件尚未完成，同志仍需努力，下课！！！

