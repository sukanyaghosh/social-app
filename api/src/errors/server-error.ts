import { CustomError } from "./custom-error";

export class ServerError extends CustomError {
  statusCode = 500;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, ServerError.prototype);
  }
  serializeErrors() {
    return [{ message: this.message, statusCode: this.statusCode }];
  }
}
