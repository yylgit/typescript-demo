"use strict";
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        // if (!result.hasOwnProperty(id)) {
        result[id] = second[id];
        // }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        // ...
    };
    return ConsoleLogger;
}());
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
var c = { age: 123, name: 123 };
console.log(c.age);
var aa = {
    a: 'a',
    b: 2,
    c: 'c',
    d: 'd'
};
var aaa = 'a';
