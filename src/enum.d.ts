declare enum ShapeKind {
    Circle = 0,
    Square = 1
}
interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}
interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}
declare let c: Circle;
