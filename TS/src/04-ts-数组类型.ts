const arr1: Array<number> = [1, 2, 3]

const arr2: number[] = [1, 2, 3]

function sum(...args: number[]) {
  // js 的话 因为担心类型问题，会判断是不是数字
  return args.reduce((pre, cur) => {
    // if(typeof pre !== Number || typeof cur !== Number)
    return pre + cur
  }, 0)
}
// 此时就会报错
// sum(1, 2, 3, '333')

//正确用法
sum(1, 2, 3, 4)
