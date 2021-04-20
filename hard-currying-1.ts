/*
  17 - Currying 1
  -------
  by Anthony Fu (@antfu) #hard #array
  
  ### Question
  
  > TypeScript 4.0 is recommended in this challenge
  
  [Currying](https://en.wikipedia.org/wiki/Currying) is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument. 
  
  For example:
  
  ```ts
  const add = (a: number, b: number) => a + b
  const three = add(1, 2)
  
  const curriedAdd = Currying(add)
  const five = curriedAdd(2)(3)
  ```
  
  The function passed to `Currying` may have multiple arguments, you need to correctly type it.
  
  In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.
  
  > View on GitHub: https://tsch.js.org/17
*/

/* _____________ Your Code Here _____________ */

type ToBasicType<T> = T extends boolean
  ? boolean
  : T extends number
  ? number
  : T extends string
  ? string
  : T

type Curry<T> = T extends (a: infer A, ...args: infer B) => infer R
  ? T extends () => R
    ? ToBasicType<R>
    : (a: A) => Curry<(...args: B) => R>
  : never

declare function Currying<T>(fn: T): Curry<T>

/* _____________ Test Cases _____________ */
import {Equal, Expect} from '@type-challenges/utils'

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying(
  (
    a: string,
    b: number,
    c: boolean,
    d: boolean,
    e: boolean,
    f: string,
    g: boolean,
  ) => true,
)

type c1 = typeof curried1

type cases = [
  Expect<
    Equal<
      typeof curried1,
      (a: string) => (b: number) => (c: boolean) => boolean
    >
  >,
  Expect<
    Equal<
      typeof curried2,
      (
        a: string,
      ) => (
        b: number,
      ) => (
        c: boolean,
      ) => (
        d: boolean,
      ) => (e: boolean) => (f: string) => (g: boolean) => boolean
    >
  >,
]
