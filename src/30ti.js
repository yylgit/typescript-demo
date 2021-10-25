"use strict";
//https://juejin.cn/post/7009046640308781063
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function makeCustomer(u) {
    // Error（TS 编译器版本：v4.4.2）
    // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
    // '{ id: number; kind: string; }' is assignable to the constraint of type 'T', 
    // but 'T' could be instantiated with a different subtype of constraint 'User'.
    return __assign(__assign({}, u), { id: u.id, kind: 'customer' });
}
//2  指明 参数类型
// function f(a: string, b: string): string
// function f(a: number, b: number): number
function f(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + ':' + b; // no error but b can be number!
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a + b; // error as b can be number | string
    }
}
f(2, 3); // Ok
// f(1, 'a'); // Error
// f('a', 2); // Error
f('a', 'b'); // Ok
var a = {
    c: false
};
// (x: boolean, a: number, b: string) => number
var fun1 = function (a, b, c) {
};
// NaiveResult的结果： "a" | "b" | "c" | "d"
var native1 = 'a';
var keys = ''; // string | number   number是都会有的类型
var value = 123; // number
var var1 = '123';
function func22() {
}
func22();
