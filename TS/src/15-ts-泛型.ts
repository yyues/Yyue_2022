// 泛型 志 在定义接口、类的时候没有指定类型，在使用的时候再去指定的一种特征

// 对于函数而言，在定义时不去声明类型， 在使用时去声明类型

// 能极大程度的复用代码

function createNumArray(len: number, value: number): number[] {
  // return new Array(len).fill(value)
  //  这时候 Array 会 提示有 undefined 的类型
  //  所以需要我们去指定想要的类型
  return new Array<number>(len).fill(value)
}

function createStrArray(len: number, value: string): string[] {
  return new Array<string>(len).fill(value)
}
//  T
//  相当于类型 参数，跟 函数参数作用类似， 实现 类型函数的功能，
// 用来替代不确定的参数值
function createArray<T>(len: number, value: T): T[] {
  return new Array<T>(len).fill(value)
}
const res = createArray<string>(2, '100')

function identity<T>(value: T): T {
  return value
}
const createArr: <T>(len: number, value: T) => T[] = (len, value) => {
  return new Array(len).fill(value)
}
