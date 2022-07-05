export {}

// TFunction - 被装饰的类
declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void
function Greeter(target: Function): void {
  target.prototype.greet = function (): void {
    console.log('Hello Semlinker!')
  }
}
@Greeter
class Greeting {
  constructor() {
    // 内部实现
  }
}
let myGreeting = new Greeting()
;(myGreeting as any).greet()
