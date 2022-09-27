import { Sequelize } from "sequelize";

export const db = new Sequelize(
    process.env.DATABASE_NAME || 'test',
    process.env.DATABASE_USER || 'root', 
    process.env.DATABASE_PASS || '', {
        dialect: 'mysql',
        host: process.env.DATABASE_HOST|| 'localhost',
        port: 3306
    }
);