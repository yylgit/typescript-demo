type Point = { x: number; y: number };
type P = keyof Point;

interface Person {
  name: string;
  age: number;
  gender: string;
}
type P1 = keyof Person; // "name" | "age" | "gender"


type name = 'firstName' | 'lastName';
type TName = {
  [key in name]: string;
};


class EffectModule {
  count = 1;
  message = "hello!";
  delay(input: Promise<number>) {
  }
  setMessage() {
  }
}

// 函数类型的属性返回
type MethodNameObj<T> = {[F in keyof T]:  T[F] extends Function ? F:never}

type a = MethodNameObj<EffectModule>
/**
 * type a = {
    count: never;
    message: never;
    delay: "delay";
    setMessage: "setMessage";
}
 */

type keys = 'delay' | 'setMessage';
// 在type对象的后边 [联合类型] 得到的返回值是 联合类型为key值的 value值的联合类型
type b = a[keys] //  

// type b = a[keyof EffectModule]
/**
 * a后边的这个 [keyof EffectModule] 是什么语法
 * type b = "delay" | "setMessage"
 */


type any1 = keyof any; // keyof any 的类型是  string | number | symbol
//type any1 = string | number | symbol
var a: any1 = 1;
var b: any1 = '2';
var bb: string = '2';
type str = 'str';

var c: str = 'str';
bb = c; //  字符串字面量类型是 string类型的子类型

type aa = str extends any1 ? str: never;

type name2 = Uppercase<'name'>;
var name2obj: name2 = 'NAME';

// var tuple = ['ahah',1];
// type ButtonType = typeof tuple[number]; // string | number


var tuple = ['ahah','123'];
type ButtonType = typeof tuple[number]; // string

var aaaa: ButtonType = '123123'










