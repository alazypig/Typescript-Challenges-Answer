/*
  4 - 实现 Pick
  -------
  by Anthony Fu (@antfu) #简单 #union #built-in
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  无需使用内置的`Pick<T, K>`泛型即可。
  
  通过从`K`中选择属性`T`来构造类型
  
  例如
  
  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  
  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```
  
  > 在 Github 上查看：https://tsch.js.org/4/zh-CN
*/

/* _____________ 你的代码 _____________ */

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

/* _____________ 测试用例 _____________ */
import {Equal, Expect} from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
