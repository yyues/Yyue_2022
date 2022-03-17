// any 任意类型
const func = (value: any) => {
  return JSON.stringify(value)
}
// 注意， any属于动态类型，可以在运行中再次赋值，即改变类型
// 所以ts不会对 any 类型校验，语法上不会出现问题，但还是存在类型安全问题
