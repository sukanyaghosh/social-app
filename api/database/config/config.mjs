export const option = {
    // database configuration
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",

    // migration table name
    migrationStorageTableName: "sequelize_meta",

    // loging
    logging: process.env.NODE_ENV === "development" ? console.log : false,
};

console.log("PO", option);

if (process.env.NODE_ENV === "production") {
    option.dialectOptions = {
        ssl: {
            rejectUnauthorized: true,
        },
    };
}

export default {
    development: option,
    test: option,
    production: option,
};
