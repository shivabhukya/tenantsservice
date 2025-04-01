import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Tenant } from "./entities/Tenant"; 

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "password",
    database: process.env.DB_NAME || "postgres",
    synchronize: true,
    logging: true,
    entities: [Tenant], 
});

export const connectDB = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1); 
    }
};
