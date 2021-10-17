


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
export  let aa : type2 = {
  a: {
    a: '123'
  }
}

export {type2}