//  class 类型

// 用来描述一类具体对象的抽象成员

export {}

class Person {
  // name: string // 声明 name 字段
  // age: number // 注意 要给参数一个初始值 或者 赋值

  //------------------------------------------------------------

  private age: number // 使用 private 只能在 类的内部进行访问
  public name: string // 公共的 参数 声明方式，默认 参数的声明使用 public
  protected height: number // 受保护的类型，只允许在 函数的内部 及 继承类中 使用

  protected readonly gender: boolean // 设置只读属性

  //  声明一个 Person 的类
  constructor(name: string, age: number) {
    // 可以在此给这个类赋值
    this.name = name
    // 此刻不声明 name 字段后报错
    this.age = age
    this.height = 180
    this.gender = false
  }
  // 可以在 class 里声明 函数
  sayHi(msg: string): string {
    console.log(this.age)
    return `i'm ${this.name}, my age is ${this.age}, i want to sey ${msg}`
  }
}

const tom = new Person('Tom', 21)

// tom.gender = true
// 此时就会报错

console.log(tom.name)

// console.log(tom.age) // 此刻声明会有报错提示
// console.log(tom.height) // 此刻同样会有报错处理

// -------------------------------------
class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age)
    console.log(this.height)
  }
  // 设置 protected 类型 可以在 子类访问到 相关属性
  static create(name: string, age: number) {
    return new Student(name, age)
  }
  // 静态方法设置
}

const jack = Student.create('Tom', 21)
