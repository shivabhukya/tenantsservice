import "reflect-metadata";
import express from "express";
import { connectDB } from "./db"; 
import tenantsRoutes from "./routes/tenants.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/tenants", tenantsRoutes);

connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
