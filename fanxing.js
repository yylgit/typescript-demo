// function identity<T>(arg: T): T {
//   return arg;
// }
function identity(arg) {
    return arg;
}
var myIdentity = identity;
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
