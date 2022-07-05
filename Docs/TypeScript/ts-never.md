### never 类型

never 类型表示的是那些永不存在的值的类型。 例如， never 类型是那些总是会抛出异常或根本就不 

会有返回值的函数表达式或箭头函数表达式的返回值类型。 

```typescript
// 返回never的函数必须存在⽆法达到的终点
function error(message: string): never {
 throw new Error(message);
}
function infiniteLoop(): never {
 while (true) {}
}
```

在 TypeScript 中，可以利⽤ never 类型的特性来实现全⾯性检查，具体示例如下： 

```typescript
type Foo = string | number;
function controlFlowAnalysisWithNever(foo: Foo) {
 if (typeof foo === "string") {
 // 这⾥ foo 被收窄为 string 类型
 } else if (typeof foo === "number") {
 // 这⾥ foo 被收窄为 number 类型
 } else {
 // foo 在这⾥是 never
 const check: never = foo;
 }
}
```

注意在 else 分⽀⾥⾯，我们把收窄为 never 的 foo 赋值给⼀个显示声明的 never 变量。如果⼀切逻辑 

正确，那么这⾥应该能够编译通过。但是假如后来有⼀天你的同事修改了 Foo 的类型： 

```typescript
type Foo = string | number | boolean;
```

然⽽他忘记同时修改 `controlFlowAnalysisWithNever` ⽅法中的控制流程，这时候 else 分⽀的 foo 

类型会被收窄为 `boolean` 类型，导致⽆法赋值给 `never` 类型，这时就会产⽣⼀个编译错误。

通过这个 ⽅式，我们可以确保 `controlFlowAnalysisWithNever` ⽅法总是穷尽了 Foo 的所有可能类型。 通过这个示例，我们可以 得出⼀个结论：**使⽤** **never** **避免出现新增了联合类型没有对应的实现，⽬的就是写出类型绝对安全的代码**

