### 类装饰器

看了一下介绍，有点迷糊

- 是否是对 `class`类统一管理，实现某些共有参数或方法？？

- 装饰器的定义是否有些问题，表现形式为函数， `class`的类型是函数吗？？？

  

```typescript
// TFunction - 被装饰的类
declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void
```

下面是具体实现

```typescript
function Greeter(target: Function): void {
  target.prototype.greet = function (): void {
    console.log('Hello Semlinker!')
  }
}
@Greeter
class Greeting {
  constructor() {
    // 内部实现
  }
}
let myGreeting = new Greeting()
;(myGreeting as any).greet()
```

首先提出以下注意事项：

-  `myGreeting` 的类型是没有的，直接调用 `greet`方法是会爆出提示的
- 期间，没有对 `class` 类型进行定义，带有装饰器的 `class`类是否会带有指定的类型实现？？？

#### 用途  --- 个人感觉

- 实现某些公共方法， format，
- 是不是可以传递数据，这个数据也可以认为是作为全局的啊