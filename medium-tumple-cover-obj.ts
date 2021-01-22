/*
  11 - 元组转换为对象
  -------
  by sinoon (@sinoon) #简单 
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  给定数组，转换为对象类型，键/值必须在给定数组中。
  
  例如
  
  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
  
  const result: TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```
  
  > 在 Github 上查看：https://tsch.js.org/11/zh-CN
*/

/* _____________ 你的代码 _____________ */

type TupleToObject<T extends readonly any[]> = {
  [key in T[number]]: key
}

/* _____________ 测试用例 _____________ */
import {Equal, Expect} from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: 'tesla'
        'model 3': 'model 3'
        'model X': 'model X'
        'model Y': 'model Y'
      }
    >
  >,
]
