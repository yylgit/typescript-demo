declare type User = {
    id: number;
    kind: string;
};
declare function f(a: string | number, b: string | number): string | number | undefined;
declare type Foo = {
    a: number;
    b?: string;
    c: boolean;
};
declare type SomeOptional = SetOptional<Foo, 'a' | 'b'>;
declare let a: SomeOptional;
declare type Simplify<T> = {
    [P in keyof T]: T[P];
};
declare type SetOptional<T, K extends keyof T> = Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>;
declare type SetRequired<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> & Required<Pick<T, K>>;
interface Example {
    a: string;
    b: string | number;
    c: () => void;
    d: {};
}
declare type StringKeysOnly = ConditionalPick<Example, string>;
declare type ConditionalKeys<T, K> = {
    [P in keyof T]: T[P] extends K ? P : never;
}[keyof T];
/**
结果为：{a:a;b:never:c:never:d:never}[a|b|c|d]=>
a|never|never|never=>
a
**/
declare type ConditionalPick<T, Conditional> = Pick<T, ConditionalKeys<T, Conditional>>;
declare type Fn = (a: number, b: string) => number;
declare type AppendArgument<F extends (...args: any) => any, A> = (x: A, ...args: Parameters<F>) => ReturnType<F>;
declare type FinalFn = AppendArgument<Fn, boolean>;
declare let fun1: FinalFn;
declare type NaiveFlat<T extends any[]> = {
    [P in keyof T]: T[P] extends any[] ? T[P][number] : T[P];
}[number];
declare type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], ['d']]>;
declare let native1: NaiveResult;
declare type Deep = [['a'], ['b', 'c'], [['d']], [[[['e']]]]];
declare type DeepFlat<T extends any[]> = {
    [K in keyof T]: T[K] extends any[] ? DeepFlat<T[K]> : T[K];
}[number];
declare type DeepTestResult = DeepFlat<Deep>;
interface Map<T> {
    [key: string]: T;
}
declare let keys: keyof Map<boolean>;
declare let value: Map<number>['foo'];
declare let var1: string;
declare function func22(): void;
interface PartialPointX {
    x: number;
}
declare type Point = PartialPointX & {
    y: number;
};
