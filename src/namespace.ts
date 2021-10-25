/// <reference path="./namespace2.ts" />

import {a} from './namespacemodule1';
console.log(a)
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
  
    const numberRegexp = /^[0-9]+$/;
  
  
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
  
}

//   namespace Validation {
//     export interface StringValidator {
//         isAcceptable(s: string): boolean;
//     }
  
//     const lettersRegexp = /^[A-Za-z]+$/;
  
//     export class LettersOnlyValidator implements StringValidator {
//         isAcceptable(s: string) {
//             return lettersRegexp.test(s);
//         }
//     }
  
//   }

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
// validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators) {
      console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
  }
}

// namespace Shapes {
//     export namespace Polygons {
//         export class Triangle { }
//         export class Square { }
//     }
// }

// import polygons = Shapes.Polygons;
// let sq = new polygons.Square(); // Same as "new Shapes.Polygons.Square()"

declare namespace D3 {
    export interface Selectors {
        select: {
            (selector: string): Selection;
            (element: EventTarget): Selection;
        };
    }

    export interface Event {
        x: number;
        y: number;
    }

    export interface Base extends Selectors {
        event: Event;
    }
}

declare var d3: D3.Base;