import { camelCase } from 'lodash'

// ts 导入 不支持ts的第三方模块 ，会有报错提示

// 此时使用 camelCase 没有类型提示

// 使用 declare 进行 声明

// declare function camelCase(params: string): string

// 此刻就有提示了

// 为了兼容 不支持 ts 的 js 模块

// 安装对应 模块库的 类型声明也能解决
const res = camelCase('hello-world')
