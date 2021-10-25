interface GenericIdentityFn<T> {
    (arg: T): T;
}
declare function identity<T>(arg: T): T;
declare let myIdentity: GenericIdentityFn<number>;
declare class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
declare let myGenericNumber: GenericNumber<number>;
