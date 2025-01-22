import sequelize from "../config/db";
import { Sequelize } from "sequelize";
import { Role } from "./role";
import { User } from "./user";

User.belongsTo(Role, { foreignKey: "role_id" });
Role.hasMany(User, { foreignKey: "role_id" });

export { sequelize, Sequelize, Role, User };
