// base
type User = {
  userName: string
  passWord: string
}
// 第一部的 wrap
// type WrapKeyOfType<T> = T extends infer O ? O : never
// 第二步骤的 wrap 没有实现递归
// type WrapKeyOfType<T> = T extends infer O ? { [P in keyof O]: O[P] } : never

type WrapKeyOfType<T> = T extends object
  ? T extends infer O
    ? { [P in keyof O]: WrapKeyOfType<O[P]> }
    : never
  : T

// keyOf
type KeyOfUser = keyof User

type k1 = WrapKeyOfType<KeyOfUser>

// 2 类型别名

type MyObj = {
  age: number
}
type MyNum = number | string
type MyObjAndNum = MyObj | string
type k2 = WrapKeyOfType<MyObjAndNum>

// 3、嵌套
type TwoObj = {
  a: MyObj
  height: number
}
type k3 = WrapKeyOfType<TwoObj>

type UserPartial<T> = {
  readonly [P in keyof T]?: T[P]
}
type u1 = UserPartial<User>
