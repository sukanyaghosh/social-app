import pg from "pg";
import { Sequelize } from "sequelize";
import { SequelizeOptions } from "sequelize-typescript";
import { option } from "../../database/config/config.mjs";

const dbOptions = option as SequelizeOptions;
dbOptions.dialectModule = pg;
const sequelize = new Sequelize(dbOptions);
export default sequelize;
