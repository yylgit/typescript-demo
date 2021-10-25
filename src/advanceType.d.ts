declare function extend<T, U>(first: T, second: U): T & U;
declare class Person {
    name: string;
    constructor(name: string);
}
interface Loggable {
    log(): void;
}
declare class ConsoleLogger implements Loggable {
    log(): void;
}
declare var jim: Person & ConsoleLogger;
declare var n: string;
interface A {
    name: string;
}
interface B {
    age: number;
    name: number;
}
declare type C = A | B;
declare let c: C;
declare type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};
declare type Partial22<T> = {
    [P in keyof T]?: T[P];
};
declare type Record2<K extends string, T> = {
    [P in K]: T;
};
declare type aaa = Record2<'c' | 'd', string>;
interface aa extends aaa {
    a: string;
    b: number;
}
declare var aa: aa;
declare type Proxy<T> = {
    set(value: T): void;
    get(): T;
};
declare type proxyify<T> = {
    [P in keyof T]: Proxy<T[P]>;
};
declare type unproxy<T> = {};
declare type Exclude2<T, U> = T extends U ? never : T;
declare type letter = 'a' | 'b' | 'c';
declare type exletter = Exclude2<letter, 'c'>;
declare var aaa: exletter;
