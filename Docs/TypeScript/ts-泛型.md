### 泛型

形式上，相当于 JS 的函数，只是传参的不是数据而是类型

```typescript
function identity<T>(value: T): T {
  return value
}
```

所以说

-  `identity<string>` 就是指定为 `string`类型的数据，
-  `<T>`相当于参数

进阶案例

```typescript
function createArray<T>(len: number, value: T): T[] {
  return new Array<T>(len).fill(value)
}
```



发现个问题

- 普通 `function` 这样定义没得问题，箭头函数怎么定义，函数内部的 泛型 `T`怎么获取呢

```typescript
const createArr: <T>(len: number, value: T) => T[] = (len, value) => {
  return new Array(len).fill(value)
}
```

上诉给出了一个箭头函数的类型定义

可以发现

- 直接在函数上定义怎么函数类型是可以的，
- 第一点延伸出来的问题，在函数名后定义的类型，和在参数里定义的类型，后者能不能写泛型？？？