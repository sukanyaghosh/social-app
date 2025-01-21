import { signup, signin } from "../controllers/auth";
import { requestValidator } from "../middleware/request-validator";
import { Router } from "express";
import { body } from "express-validator";

const route = Router();

route.post(
    "/signup",
    [
        body("first_name").notEmpty().withMessage("First name is required"),
        body("last_name").notEmpty().withMessage("Last name is required"),
        body("email").isEmail().withMessage("Email must be valid"),
        body("password")
            .trim()
            .isLength({ min: 6, max: 20 })
            .withMessage("Password must be between 6 and 20 characters"),
        body("mobile")
            .isMobilePhone("en-IN")
            .withMessage("Mobile number must be valid"),
    ],
    requestValidator,
    signup
);
route.post(
    "/signin",
    [body("email").isEmail().withMessage("Email must be valid")],
    requestValidator,
    signin
);

export { route as authRoute };
