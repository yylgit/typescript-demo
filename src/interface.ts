interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any; // 任意的其他属性
}
// interface 可以表示 对象 类 函数 数组等等
// 接口之间也可以继承

// 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。

interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}


interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
      this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}

interface Shape {
  color: string;
}


interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;


// interface StringArray {
//   [haha: number]: string;
// }

// let myArray: StringArray;
// myArray = ["Bob", "Fred"];

// let myStr: string = myArray[0];


interface ReadonlyStringArray {

  // readonly [index: number]: string;
  // 或
  "0": string,
  "1": string
}
// 要想这么声明数组 就必须有数字索引签名 因为这么写相当于给myArray[0] myArray[1]和赋值。
let myArray: ReadonlyStringArray = ["Alice", "Bob"]; 
// myArray[2] = "Mallory"; // error!  readonly时无法赋值

// interface ClockConstructor {
//   new (hour: number, minute: number): Clock;
// }

// class Clock2 implements ClockConstructor {
//   currentTime: Date;
//   // constructor(h: number, m: number) { }
// }


interface ClockConstructor {
  name: string
}
  
  class Clock2 implements ClockConstructor {
     constructor(public name: string) {

     }
    // constructor(h: number, m: number) { }
  }
  


// class Control {
//     private state: any;
// }
// // 接口实现了类 类中有私有属性 这就要求所有 实现这个接口的类 必须是这个类的子类
// interface SelectableControl extends Control {
//     select(): void;
// }
// class Button extends Control implements SelectableControl {
//     select() { }
// }
// class Image implements SelectableControl {
//   private state: any // 自己实现相同的state也没有用
//   select() { }
// }
