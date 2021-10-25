import "reflect-metadata";
declare class Point {
    private _x;
    private _y;
    greeting: string;
    constructor(x: number, y: number, z: string);
    get x(): number;
    set x(val: number);
    get y(): number;
    greet(name: string): string;
}
export { Point };
