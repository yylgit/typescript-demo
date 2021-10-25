import "reflect-metadata";

function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
  return class extends constructor {
      newProperty = "new property";
      hello = "override";
  }
}

// @classDecorator
// class Greeter {
//   property = "property";
//   hello: string;
//   constructor(m: string) {
//       this.hello = m;
//   }
// }

// console.log(new Greeter("world"));

// function enumerable(value: boolean) {
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       descriptor.enumerable = value;
//   };
// }

// class Greeter {
//   greeting: string;

//   @enumerable(false)
//   static staticMethod() {
//     return "Hello, ";
//   }

//   constructor(message: string) {
//       this.greeting = message;
//   }

//   @enumerable(false)
//   protoMethod() {
//       return "Hello, " + this.greeting;
//   }
// }


function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.configurable = value;
  };
}

function format(formatString: string): any {
  // console.log(formatString);
  return '';
}

const requiredMetadataKey = Symbol("required");

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}

// function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
//     let method = descriptor.value;
//     descriptor.value = function () {
//         let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
//         if (requiredParameters) {
//             for (let parameterIndex of requiredParameters) {
//                 if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
//                     throw new Error("Missing required argument.");
//                 }
//             }
//         }

//         return method.apply(this, arguments);
//     }
// }

@classDecorator
class Point {
  private _x: number;
  private _y: number;
  greeting: string;
  constructor(x: number, y: number, z: string) {
      this._x = x;
      this._y = y;
      this.greeting = z;
  }

  @configurable(false)
  get x() { return this._x; }

  set x(val: number) {  this._x = val;}

  @configurable(false)
  get y() { return this._y; }

  // @validate
  greet(@required name: string) {
      return "Hello " + name + ", " + this.greeting;
  }
}

export {Point}