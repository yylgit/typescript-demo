interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
interface SearchFunc {
    (source: string, subString: string): boolean;
}
declare let mySearch: SearchFunc;
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}
declare class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
    constructor(h: number, m: number);
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
declare let square: Square;
interface ReadonlyStringArray {
    "0": string;
    "1": string;
}
declare let myArray: ReadonlyStringArray;
interface ClockConstructor {
    name: string;
}
declare class Clock2 implements ClockConstructor {
    name: string;
    constructor(name: string);
}
