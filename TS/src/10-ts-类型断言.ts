// 类型断言，
export {}
// 在某些特殊情况下，ts无法推断出类型，但是开发人员知道该类型

// 如数据来源自接口，知道传递类型
const arr = [111, 222, 333, 444]

const res = arr.find(i => i > 120)

// 此时查看 res 类型 有两种， number 和 undefined 因为 ts 认为可能会查找不到

// 所以此时要告诉 ts 认为 res 就是 number

// 类型断言有两种，

// 第一种
const num1 = res as number

// 第二种
const num2 = <number>res

/* 备注，当 使用 jsx 或  tsx 时， 第二种方法可能会和 标签 重复  导致阅读有障碍*/

// 注意，类型断言 并不是类型转换， 不是说把一个类型转换成了另一个类型
