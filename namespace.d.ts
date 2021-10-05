declare namespace Validation {
    interface StringValidator {
        isAcceptable(s: string): boolean;
    }
    class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string): boolean;
    }
    class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string): boolean;
    }
}
declare let strings: string[];
declare let validators: {
    [s: string]: Validation.StringValidator;
};
