

interface inter1 {
  name: string,
  age: number
}

var obj1: inter1 = {name: 'obj1', age: 15};

type type1 = typeof obj1;

var obj2: type1 = obj1;

type aa = keyof type1;

export {}
