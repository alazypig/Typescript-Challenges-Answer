/*
  119 - ReplaceAll
  -------
  by Anthony Fu (@antfu) #medium #template-literal
  
  ### Question
  
  Implement `ReplaceAll<S, From, To>` which replace the all the substring `From` with `To` in the given string `S`
  
  For example
  
  ```ts
  type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
  ```
  
  > View on GitHub: https://tsch.js.org/119
*/

/* _____________ Your Code Here _____________ */

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer P}${From}${infer A}`
  ? `${P}${To}${ReplaceAll<A, From, To>}`
  : S

/* _____________ Test Cases _____________ */
import {Equal, Expect} from '@type-challenges/utils'

type cases = [
  Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
  Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
  Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
]
