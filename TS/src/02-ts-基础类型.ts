const a: string = '111'
const b: number = 2222
const c: boolean = true
//  可以使用 null 来给变量赋值，但是需要调整 tsconfig 的 strict 配置参数为 false ， 或者开启 strictNullChecks
// const d: string = null

// 即非严格模式下，变量是可以为空的

//  void 严格模式下，只能赋值 undefined
const e: void = undefined
// 没有意义，可以不做考虑
const f: null = null
const g: undefined = undefined

// symbol 内置对象，是es2015中定义的，所以es6及以上新增的对象都会报错，比如 Promise
const h: symbol = Symbol()

// 解决办法有两种，一种是直接修改 tsconfig 的 target 为 es2015及以上 一种是修改 tsconfig 的 配置文件， lib 数组中添加 ES2015

// 备注，但是配置lib后会把 默认的 库给覆盖掉，从而导致 console 报错，所以需要 再在 lib 添加 DOM 参数
