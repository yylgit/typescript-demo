declare class Point {
    x: number;
    y: number;
}
interface Point3d extends Point {
    z: number;
}
declare let point3d: Point3d;
export { point3d };
