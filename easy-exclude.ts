/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #简单 #built-in
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  实现内置的Exclude <T，U>
  >从T中排除可分配给U的那些类型
  
  > 在 Github 上查看：https://tsch.js.org/43/zh-CN
*/

/* _____________ 你的代码 _____________ */

type MyExclude<T, U> = T extends U ? never : T

/* _____________ 测试用例 _____________ */
import {Equal, Expect, ExpectFalse, NotEqual} from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
  Expect<
    Equal<
      MyExclude<'a' | 'b' | 'c', 'a' | 'b'>,
      Exclude<'a' | 'b' | 'c', 'a' | 'b'>
    >
  >,
  Expect<
    Equal<
      MyExclude<string | number | (() => void), Function>,
      Exclude<string | number | (() => void), Function>
    >
  >,
]
