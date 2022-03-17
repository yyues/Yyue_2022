// 用接口来约束 类 的 某些 实现，

//  能够规范 类的 实现 ，但不限制实现的能力

// 比如 人 和动物都能跑， 但是一个直立的跑，一个爬着跑

// 所以用接口来约束 跑这个能力，但是实现的方式不一样
export {}

interface EatAndRun {
  eat(food: string): void
  run(distance: number): void
}
interface Eat {
  eat(food: string): void
}
interface Run {
  run(distance: number): void
}
// 使用 implements 必须要有接口规范对应的成员
// 没有话就会报错

class Person implements EatAndRun {
  eat(food: string) {
    console.log(food)
  }
  run(distance: number) {
    console.log(distance)
  }
}
// 使用 , 来使用 多个接口
class Animals implements Eat, Run {
  eat(food: string) {
    console.log(food)
  }
  run(distance: number) {
    console.log(distance)
  }
}
// -----------------------------------------------------

//  推荐一个接口约束一个能力， 使用多个接口来使用对应能力
