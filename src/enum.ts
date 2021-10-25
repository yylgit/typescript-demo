
enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  kind: ShapeKind.Circle, // 传 number可以 枚举要是字符串枚举 则必须是ShapeKind.Circle
  //    ~~~~~~~~~~~~~~~~ Error!
  radius: 100,
}