declare namespace Validation {
    interface StringValidator {
        isAcceptable(s: string): boolean;
    }
    class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string): boolean;
    }
}
