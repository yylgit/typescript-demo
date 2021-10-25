declare function buildLabel(name: string): string;
declare namespace buildLabel {
    let suffix: string;
    let prefix: string;
}
declare enum Color {
    red = 1,
    green = 2,
    blue = 4
}
declare namespace Color {
    function mixColor(colorName: string): number | undefined;
}
