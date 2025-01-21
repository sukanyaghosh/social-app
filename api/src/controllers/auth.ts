import { BadRequestError } from "../errors";
import { User } from "../models";
import { Jwt } from "../utils/jwt";
import { Password } from "../utils/password";
import e, { Request, Response, NextFunction } from "express";

/**
 * Sign up a new user
 * @param req
 * @param res
 * @param next
 */

const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;

        const user = await User.findOne({
            where: { email: body.email },
        });

        if (user) {
            throw new BadRequestError("User already exists");
        }

        body.role_id = 2;
        const newUser = await User.create(body);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

/**
 * User sign in
 * @param req
 * @param res
 * @param next
 */
const signin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: { email },
        });

        if (!user) {
            throw new BadRequestError("Invalid credentials");
        }

        const isValid = await Password.compare(password, user.password);
        if (!isValid) {
            throw new BadRequestError("Invalid credentials");
        }

        const token = Jwt.token({
            user_id: user.user_id,
            email: user.email,
        });

        const users = user.toJSON();
        delete users.password;

        res.status(200).json({
            token,
            expireIn: 3600,
            user: users,
        });
        // your code here
    } catch (error) {
        next(error);
    }
};

export { signin, signup };
