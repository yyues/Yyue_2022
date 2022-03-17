// 接口 interfaces

// 规范，契约，可以约定数据的结构

export {}

// 定义一个接口

interface Post {
  content: string
  author: string
  subtitle?: string // 可选成员
  readonly summary: string // 只读成员
}
// 只懂成员在 初始化 后就不能被修改

const printPost = (post: Post) => {
  console.log(post.content)
  console.log(post.author)
}
printPost({
  content: '111',
  author: '222',
  summary: 'you are good'
})

// ------------------------------------------------------------------

// 动态成员，因为不确定接口会有那些类型，所以使用动态成员来处理
interface Cache {
  // 下述 key 值只是 代指 ，用来表示不确定的参数名
  [key: string]: number
}
// 此刻此刻创建一个不存在的 foo 参数 并 赋值
// 但是有个限制，创建的成员都要是定义好的类型， 如 number
const cache: Cache = {}
cache.foo = 1234
