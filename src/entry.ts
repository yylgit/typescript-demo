

var a: string = '123';
function b(c: string): void {
  console.log(c)
}
b(a)
type type1 = {
  a: string
}
type type2 = {
  a: type1
}

// export  let aa : type2 = {
//   a: {
//     a: '123'
//   }
// }

// export {type2}

// 开启了
// let foo2: undefined;
// let foo: number = 1;
// foo = foo2; // 不能将类型“undefined”分配给类型“number”。
// console.log(foo)

interface OBJ1 {
  name? : string,
  age?: number,
  readonly sex: string
}

let obj1: OBJ1 = {
  name: 'yangyiliang',
  sex: 'man'
}

// obj1.

console.log(obj1)

