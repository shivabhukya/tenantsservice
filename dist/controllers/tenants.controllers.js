"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTenant = exports.updateTenant = exports.getTenantById = exports.getAllTenants = exports.createTenant = void 0;
const db_1 = require("../db");
const Tenant_1 = require("../entities/Tenant");
const tenantRepo = db_1.AppDataSource.getRepository(Tenant_1.Tenant);
const createTenant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tenantData = tenantRepo.create(req.body);
        const newTenant = yield tenantRepo.save(tenantData);
        res.status(201).json({ message: "Tenant created successfully", newTenant });
    }
    catch (error) {
        console.error("Error creating tenant:", error);
        res.status(500).json({ message: "Error creating tenant", error });
    }
});
exports.createTenant = createTenant;
const getAllTenants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tenants = yield tenantRepo.find();
        res.json(tenants);
    }
    catch (error) {
        console.error("Error fetching tenants:", error);
        res.status(500).json({ message: "Error fetching tenants", error });
    }
});
exports.getAllTenants = getAllTenants;
const getTenantById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tenant = yield tenantRepo.findOneBy({ tenantId: parseInt(req.params.id) });
        if (tenant) {
            res.json(tenant);
        }
        else {
            res.status(404).json({ message: "Tenant not found" });
        }
    }
    catch (error) {
        console.error("Error fetching tenant:", error);
        res.status(500).json({ message: "Error fetching tenant", error });
    }
});
exports.getTenantById = getTenantById;
const updateTenant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateResult = yield tenantRepo.update(req.params.id, req.body);
        if (updateResult.affected === 0) {
            res.status(404).json({ message: "Tenant not found" });
        }
        else {
            res.json({ message: "Tenant updated successfully" });
        }
    }
    catch (error) {
        console.error("Error updating tenant:", error);
        res.status(500).json({ message: "Error updating tenant", error });
    }
});
exports.updateTenant = updateTenant;
const deleteTenant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteResult = yield tenantRepo.delete(req.params.id);
        if (deleteResult.affected === 0) {
            res.status(404).json({ message: "Tenant not found" });
        }
        else {
            res.json({ message: "Tenant deleted successfully" });
        }
    }
    catch (error) {
        console.error("Error deleting tenant:", error);
        res.status(500).json({ message: "Error deleting tenant", error });
    }
});
exports.deleteTenant = deleteTenant;
