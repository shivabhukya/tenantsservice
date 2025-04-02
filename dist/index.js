"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const tenants_routes_1 = __importDefault(require("./routes/tenants.routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use("/tenants", tenants_routes_1.default);
(0, db_1.connectDB)().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
