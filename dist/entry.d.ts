declare type type1 = {
    a: string;
};
declare type type2 = {
    a: type1;
};
export declare let aa: type2;
export { type2 };
