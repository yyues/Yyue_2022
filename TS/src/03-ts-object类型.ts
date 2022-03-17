// object 类型并不是指对象，而是指 非基础类型的 数据类型 如 函数、对象、数组
const foo: object = function () {} // [] {}

// 要求对象内成员名称和数据类型一定要对应的 ，不能多页不能少

const obj: { foo: number; bar: string } = { foo: 123, bar: '111' }

// 多了就会报错
//const obj1: { foo: number; bar: string } = { foo: 123, bar: '111', more: '222' }

// 上面类似对象的类型定义可以使用，但是更建议使用接口
