"use strict";
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
// 要想这么声明数组 就必须有数字索引签名 因为这么写相当于给myArray[0] myArray[1]和赋值。
var myArray = ["Alice", "Bob"];
var Clock2 = /** @class */ (function () {
    function Clock2(name) {
        this.name = name;
    }
    return Clock2;
}());
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
