/**
 * Create a new error constructor instance.
 */
declare function makeError (name: string): makeError.BaseError;

/**
 * Set the constructor prototype to `BaseError`.
 */
declare function makeError <T extends Function> (constructor: T): T & makeError.BaseError;

/**
 * Create a specialized error instance.
 */
declare function makeError <T extends Function> (name: string, constructor: T): T;

declare module makeError {
  /**
   * Use ES6 inheritance.
   */
  export class BaseError implements Error {
    message: string;
    name: string;
    stack: string;

    constructor (message: string);
  }
}

export = makeError;
