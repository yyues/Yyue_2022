// 函数类型 function
export {}
// 两种声明方式

// 函数声明 和 函数表达式
// 函数声明
function sum(a: number, b: number): number {
  return a + b
}
// 可选参数 ，使用 ？ （可选链）或者给定默认值
function sum2(a: number, b: number = 0): number {
  return a + b
}
sum(1, 2)
//  注意 可选参数要放在函数传参末尾，必选参数一定要放在前面

/* ------------------------------------------ */
// 函数表达式

const fun = function name(a: number): string {
  return 'fun'
}
