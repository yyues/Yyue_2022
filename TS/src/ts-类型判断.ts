interface MyUser {
  name: string
  age: number
}
interface MyAdmin {
  username: string
  password: string
}
type UnionType = MyAdmin | MyUser

const MyUnionFunc = (param: UnionType) => {
  if ('age' in param) {
    console.log('age in param')
  }
  if ('username' in param) {
    console.log('username in param')
  }
}
