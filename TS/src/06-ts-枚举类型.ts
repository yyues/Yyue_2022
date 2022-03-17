// 枚举 Enum
// 表示只从规定的几个数值去赋值
export {}

// 第一种，使用对象模拟
const dataStatus = {
  noGirl: 0,
  hasGirl: 1,
  hasWife: 2
}
// 第二种，申明 enum
enum status {
  noGirl = 0,
  hasGirl = 1,
  hasWife = 2
}
// 注意，不给 enum 传入初始值的话，默认会从 0 开始自加
enum status1 {
  noGirl,
  hasGirl,
  hasWife
}
// 如果 enum 枚举项第一个参数有传入值，会按照第一个参数的值进行自加
enum status2 {
  noGirl = 78,
  hasGirl,
  hasWife
}
// 同时 enum 可以使用 string 进行枚举
enum status3 {
  noGirl = 'student',
  hasGirl = 'teacher',
  hasWife = 'parent'
}
// 常量枚举，会把
const enum status4 {
  noGirl = 'student',
  hasGirl = 'teacher',
  hasWife = 'parent'
}
const data = {
  name: 'YaoYue',
  age: 21,
  state: status4.noGirl //|| dataStatus.noGirl //  0 // 0 没对象 1 有对象 2 已婚
}
// 同时注意 enum 会影响编译后的结果，其他类型编译后会被移除掉，但是 enum 不会
