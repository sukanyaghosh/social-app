import bcrypt from "bcryptjs";

export class Password {
    static async hash(password: string) {
        return bcrypt.hash(password, 10);
    }

    static async compare(password: string, hash: string) {
        return bcrypt.compare(password, hash);
    }
}
