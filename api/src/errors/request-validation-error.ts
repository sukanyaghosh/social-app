import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super("somthing went wrong");
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  serializeErrors() {
    return this.errors.map((error: ValidationError) => ({
      message: error.msg,
      statusCode: this.statusCode,
      field: error.type,
    }));
  }
}
