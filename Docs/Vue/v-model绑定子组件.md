## V-model 绑定 自定义组件处理方式

首先，我们可能会有这些需求
- 动态显示子组件下变化的数据
- 绑定某些特殊的返回值

所以，怎么处理这个模块呢？

网上看的教程基本都是教绑定 字符串类型的

### 下面让我们先看看3.0的官网怎么实现的

默认情况下，组件上的 `v-model` 使用 `modelValue` 作为 prop 和 `update:modelValue` 作为事件。我们可以通过向 `v-model` 传递参数来修改这些名称：

```vue
<my-component v-model:title="bookTitle"></my-component>
```

这段父组件的定义是这样的

- 首先3.0的版本能够自定义修饰符，不同于2.0的版本 `v -model:xxx` 的默认值不再是`v-mode:value`
- 3.0的版本也是可以多个绑定`v-model`

```vue
app.component('my-component', {
  props: {
    title: String
  },
  emits: ['update:title'],
  template: `
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)">
  `
})
```

下面是讲解和注意事项

- 3.0的 emit 使用的是 `update:ModelValue` 作为事件名，其中 `ModelValue` 作为默认值是可以替换的，同上文 `xxx`对应

- 2.0的版本实现是下面这样的

   

  ```js
  model:{
  	prop:'value',
      event:'input'
  }
  ```

非常重要的一点是什么呢，就是子组件input使用的是 `:value='value'` ，非常严肃的一个问题

虽然没有实践过，如果使用的是 `v-model = 'value'`会怎么样呢？

**我猜答案是绑定不到的**



### 那么能不能实现`v-model`或者实现`v-model`的效果呢 ？

总所周知，`v-model`的实现代码是这样的

```vue
<input :value = 'value' @input ='value = e.target.value'
```

那么对于子组件而言，使用`v-model`绑定的值也是可以用上述这个样子来实现，

那么实现流程如下

1. 在子组件下使用的`v-model`绑定的 数值 `value`
2.  watch 监听 `value` 的改变，
3.  emit  向 父组件传递如 `change`的事件，
4. 父组件监听 `change` 事件， 对 `:value = 'value' ` 中 绑定的 `value` 进行 赋值

### 总结

- 尝试了 在父组件 `v-model` 并依据官方提示，并没有一个很好的解决方案
- 2.0的情况下用上述的情况下可能会略显臃肿，因为要写若干个重复的函数来解决如此的问题
- 3.0的情况也算不上多好，虽然在 `setup`下能够实现重复逻辑的复用， 单独文件的引用也可能略显麻烦，全局引用文件也可能不如人意
- 总而言之，在没找到更好的解决方式前只能使用这样的方式。
