import "reflect-metadata";
import { DataSource } from "typeorm";
import { Tenant } from "./entities/Tenant"; 

const connectDB = new DataSource({
    type: "postgres",
    url: "postgres://postgres:password@localhost:5432/postgres",
    synchronize: true, 
    logging: true,
    entities: [Tenant], 
    extra: {
        ssl: false 
    }
});

connectDB.initialize()
    .then(() => {
        console.log("Database connected successfully!");
    })
    .catch((error) => {    
        console.error("Database connection error:", error);
    });

export default connectDB;
