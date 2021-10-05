declare class Animal {
    private name;
    constructor(theName: string);
}
declare class Grid {
    scale: number;
    static origin: {
        x: number;
        y: number;
    };
    calculateDistanceFromOrigin(point: {
        x: number;
        y: number;
    }): number;
    constructor(scale: number);
}
declare let grid1: Grid;
declare let grid2: Grid;
