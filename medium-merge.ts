/*
  599 - Merge
  -------
  by ZYSzys (@ZYSzys) #medium #object
  
  ### Question
  
  Merge two types into a new type. Keys of the second type overrides keys of the first type.
  
  > View on GitHub: https://tsch.js.org/599
*/

/* _____________ Your Code Here _____________ */

type Merge<F, S> = {[K in keyof F]: K extends keyof S ? S[K] : F[K]}

/* _____________ Test Cases _____________ */
import {Equal, Expect, ExpectFalse, NotEqual} from '@type-challenges/utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
}

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number
        b: number
      }
    >
  >,
]
