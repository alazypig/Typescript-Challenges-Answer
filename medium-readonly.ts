/*
  7 - 实现 Readonly
  -------
  by Anthony Fu (@antfu) #简单 #built-in #readonly #object-keys
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  无需使用内置的`Readonly<T>`泛型即可。
  
  构造一个类型，并将T的所有属性设置为只读，这意味着无法重新分配所构造类型的属性。
  
  例如
  
  ```ts
  interface Todo {
    title: string
    description: string
  }
  
  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }
  
  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  ```
  
  > 在 Github 上查看：https://tsch.js.org/7/zh-CN
*/

/* _____________ 你的代码 _____________ */

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

/* _____________ 测试用例 _____________ */
import {Equal, Expect} from '@type-challenges/utils'

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>]

interface Todo1 {
  title: string
  description: string
  completed: boolean
}
