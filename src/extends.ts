// never是所有类型的子类型
// type A1 = never extends 'x' ? string : number; // string

// type P<T> = T extends 'x' ? string : number;
// type A2 = P<never> // never


type A = Exclude<'key1' | 'key2', 'key2'>





