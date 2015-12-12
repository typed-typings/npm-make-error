/**
 * Create a new error constructor instance.
 */
declare function makeError(name: string): makeError.BaseErrorConstructor;

/**
 * Set the constructor prototype to `BaseError`.
 */
declare function makeError<T extends typeof Error>(super_: T): T & makeError.BaseErrorConstructor;

/**
 * Create a specialized error instance.
 */
declare function makeError<T extends typeof Error>(name: string | Function, super_: T): T;

declare module makeError {
  /**
   * Use with ES6 inheritance.
   */
  export class BaseError implements Error {
    message: string;
    name: string;
    stack: string;

    constructor(message: string);
  }

  export interface BaseErrorConstructor {
    new (message: string): BaseError
    super_: any
  }
}

export = makeError;
