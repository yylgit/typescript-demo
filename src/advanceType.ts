function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
      (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
      // if (!result.hasOwnProperty(id)) {
          (<any>result)[id] = (<any>second)[id];
      // }
  }
  return result;
}

class Person {
  constructor(public name: string) { }
}
interface Loggable {
  log(): void;
}
class ConsoleLogger implements Loggable {
  log() {
      // ...
  }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();

interface A {
  name: string
}
interface B {
  age: number
  name: number
}
type C = A | B;

let c: C = {age:123, name: 123}
console.log(c.age)


type Nullable<T> = {
  [P in keyof T]: T[P] | null
}

type Partial22<T> = {
  [P in keyof T]?: T[P];
}



type Record2<K extends string, T> = {
  [P in K]: T;
}


type aaa = Record2<'c' | 'd',string>

interface aa extends aaa {
  a: string,
  b: number
}


var aa: aa = {
  a: 'a',
  b: 2,
  c: 'c',
  d: 'd'
}

type Proxy<T> = {
  set(value: T): void,
  get(): T;
}

type proxyify<T> = {
  [P in keyof T]: Proxy<T[P]>
}

type unproxy<T> = {
  // [P in keyof T]: typeof T[P].get()
}

// 这里 T extends U ？   对于联合类型来说 感觉像是 把T中的每一个类型进行了遍历
type Exclude2<T, U> = T extends U ? never : T;

type letter = 'a' | 'b' | 'c'

type exletter = Exclude2<letter, 'c'>

var aaa: exletter = 'a';