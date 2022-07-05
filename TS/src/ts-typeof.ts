// typeof 操作符可以⽤来获取⼀个变量声明或对象的类型。

interface Person {
  name: string
  age: number
}
const use: Person = { age: 18, name: 'YaoYue' }

type After = typeof use

function toArray(x: number): Array<number> {
  return [x]
}
type Func = typeof toArray

type L1 = keyof Person
