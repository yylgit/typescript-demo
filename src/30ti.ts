//https://juejin.cn/post/7009046640308781063

//1 
type User = {
  id: number;
  kind: string;
};

function makeCustomer<T extends User>(u: T): T {
  // Error（TS 编译器版本：v4.4.2）
  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T', 
  // but 'T' could be instantiated with a different subtype of constraint 'User'.
  return {
    ...u,
    id: u.id,
    kind: 'customer'
  }
}

//2  指明 参数类型
// function f(a: string, b: string): string
// function f(a: number, b: number): number
function f(a: string | number, b: string | number) {
  if (typeof a === 'string' && typeof b === 'string' ) {
    return a + ':' + b; // no error but b can be number!
  } else  if (typeof a === 'number' && typeof b === 'number' ) {
    return a + b; // error as b can be number | string
  }
}

f(2, 3); // Ok
// f(1, 'a'); // Error
// f('a', 2); // Error
f('a', 'b') // Ok


//3 
type Foo = {
	a: number;
	b?: string;
	c: boolean;
}

// 测试用例
type SomeOptional = SetOptional<Foo, 'a' | 'b'>;

let a: SomeOptional = {
  c: false
}

type Simplify<T> = {
  [P in keyof T]: T[P]
}

// key是要设置可选的key值
type SetOptional<T, K extends keyof T> = 
   Partial<Pick<T, K>>   &   Pick<T, Exclude<keyof T, K>> 

type SetRequired<T, K extends keyof T> = 
    Pick<T, Exclude<keyof T, K>> & Required<Pick<T, K>> 



// 4
interface Example {
	a: string;
	b: string | number;
	c: () => void;
	d: {};
}

// 测试用例：
type StringKeysOnly = ConditionalPick<Example, string>;
//=> {a: string}

// extends  语句，如果左边是联合类型，会依次执行，并返回一个联合类型
// type Util<T, K extends keyof T, U> = K extends any ? ( T[K] extends U ? K : never ) : never;

// type ConditionalPick<T,U> = {
//     [P in Util<T, keyof T, U>]: T[P]
// }


//遍历每一个属性，将他的类型约束于给定的类型，符合约束把该属性的类型赋值为属性名，不符合约束变成never
//然后再把用pick 从 对象中 把不为never的属性拿出来
//首先我们定义一个拿出符合要求的key的方法

type ConditionalKeys<T, K> = {
	[P in keyof T ] : T[P] extends K ? P: never
}[keyof T]
/**
结果为：{a:a;b:never:c:never:d:never}[a|b|c|d]=>
a|never|never|never=>
a
**/
//然后我们通过Pick将符合的key对应的属性拿出来
type ConditionalPick<T ,Conditional> = Pick< T , ConditionalKeys<T, Conditional>>


//5 
// 这里用到了 Parameters 和 ReturnType
type Fn = (a: number, b: string) => number
type AppendArgument<F extends (...args: any) => any, A> = 
  (x: A, ...args: Parameters<F>) => ReturnType<F>

type FinalFn = AppendArgument<Fn, boolean> 
// (x: boolean, a: number, b: string) => number

let fun1: FinalFn = function(a: boolean,b: number,c: string): any {
  
}


// 6 

type NaiveFlat<T extends any[]> = {
  [P in keyof T]: T[P] extends any[] ? T[P][number] : T[P]
}[number]
// 测试用例：
type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], ['d']]>
// NaiveResult的结果： "a" | "b" | "c" | "d"

let native1: NaiveResult = 'a'

type Deep = [['a'], ['b', 'c'], [['d']], [[[['e']]]]];

type DeepFlat<T extends any[]> = {
  [K in keyof T]: T[K] extends any[] ? DeepFlat<T[K]> : T[K]
}[number]

type DeepTestResult = DeepFlat<Deep>
// DeepTestResult: "a" | "b" | "c" | "d" | "e"


interface Map<T> {
  [key: string]: T;
}
let keys: keyof Map<boolean> = ''; // string | number   number是都会有的类型
let value: Map<number>['foo'] = 123; // number


let var1 = '123';

function func22() {

}
func22();

interface PartialPointX { x: number; }
type Point = PartialPointX & { y: number; };
