import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";
import { Role } from "./role";
import { Password } from "../utils/password";

export class User extends Model {
    public declare user_id: number;
    public declare first_name: string;
    public declare last_name: string;
    public declare email: string;
    public declare password: string;
    public declare avatar: string;
    public declare mobile: string;
    public declare role_id: string;
    public declare active?: boolean;
    public declare readonly created_at?: Date;
    public declare readonly updated_at?: Date;
}

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(120),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        mobile: {
            type: DataTypes.STRING(10),
            allowNull: true,
            unique: true,
        },
        avatar: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        role_id: {
            type: DataTypes.STRING(100),
            allowNull: false,
            references: {
                model: Role,
                key: "role_id",
            },
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true,
        },
    },
    {
        sequelize,
        tableName: "users",
        modelName: "User",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        underscored: true,
        hooks: {
            beforeCreate: async (user: User) => {
                // your code here
                user.password = await Password.hash(user.password);
            },
        },
    }
);
