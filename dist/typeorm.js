"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Tenant_1 = require("./entities/Tenant");
const connectDB = new typeorm_1.DataSource({
    type: "postgres",
    url: "postgres://postgres:password@localhost:5432/postgres",
    synchronize: true,
    logging: true,
    entities: [Tenant_1.Tenant],
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
exports.default = connectDB;
