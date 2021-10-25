declare var a: string;
declare function b(c: string): void;
declare type type1 = {
    a: string;
};
declare type type2 = {
    a: type1;
};
interface OBJ1 {
    name?: string;
    age?: number;
    readonly sex: string;
}
declare let obj1: OBJ1;
