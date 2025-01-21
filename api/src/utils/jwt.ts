import { AuthError } from "../errors";
import JWT, { JwtPayload, SignOptions } from "jsonwebtoken";

const DEFAULT_OPTIONS: SignOptions = {
    expiresIn: "1h",
};
export class Jwt {
    static token(
        payload: JwtPayload,
        options: SignOptions = DEFAULT_OPTIONS
    ): string {
        return JWT.sign(payload, process.env.JWT_SECRET!, options);
    }
    static verify(token: string) {
        return JWT.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
            if (err) {
                throw new AuthError("Invalid token");
            }
            return decoded;
        });
    }
}
