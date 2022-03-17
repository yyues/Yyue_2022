//  抽象类 abstract

// 被定义为抽象类后，只能被继承，不能被使用

abstract class Animal {
  eat(food: string): void {
    console.log(food)
  }
  // 定义抽象方法
  // 抽象方法必须被实现
  abstract run(distance: number): void
}
// 设置后会报错，提示无法设置抽象类的实例
// const cat = new Animal()

class Dog extends Animal {
  run(distance: number): void {
    console.log('i am run ')
  }
}
const chineseDog = new Dog()
chineseDog.eat('米饭')
chineseDog.run(122)
