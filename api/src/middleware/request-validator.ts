import { RequestValidationError } from "../errors";
import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export function requestValidator(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        throw new RequestValidationError(result.array());
    }

    next();
}
