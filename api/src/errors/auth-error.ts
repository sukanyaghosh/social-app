import { CustomError } from "./custom-error";

export class AuthError extends CustomError {
  statusCode: number = 401;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, AuthError.prototype);
  }
  serializeErrors() {
    return [{ message: this.message, statusCode: this.statusCode }];
  }
}
