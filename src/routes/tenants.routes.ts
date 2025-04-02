import { Router } from "express";
import { createTenant, getAllTenants, getTenantById, updateTenant, deleteTenant } from "../controllers/tenants.controllers";

const router = Router();

router.post("/", createTenant);
router.get("/", getAllTenants);
router.get("/:id", getTenantById);
router.put("/:id", updateTenant);
router.delete("/:id", deleteTenant);


export default router;
