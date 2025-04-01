import { Request, Response } from "express";
import { AppDataSource } from "../db";  
import { Tenant } from "../entities/Tenant";

const tenantRepo = AppDataSource.getRepository(Tenant); 


export const createTenant = async (req: Request, res: Response): Promise<void> => {
    try {
        const tenantData = tenantRepo.create(req.body); 
        const newTenant = await tenantRepo.save(tenantData); 
        res.status(201).json({ message: "Tenant created successfully", newTenant });
    } catch (error) {
        console.error("Error creating tenant:", error);
        res.status(500).json({ message: "Error creating tenant", error });
    }
};



export const getAllTenants = async (_: Request, res: Response): Promise<void> => {
    try {
        const tenants = await tenantRepo.find();
        res.json(tenants);
    } catch (error) {
        console.error("Error fetching tenants:", error);
        res.status(500).json({ message: "Error fetching tenants", error });
    }
};


export const getTenantById = async (req: Request, res: Response): Promise<void> => {
    try {
        const tenant = await tenantRepo.findOneBy({ tenantId: parseInt(req.params.id) });
        if (tenant) {
            res.json(tenant);
        } else {
            res.status(404).json({ message: "Tenant not found" });
        }
    } catch (error) {
        console.error("Error fetching tenant:", error);
        res.status(500).json({ message: "Error fetching tenant", error });
    }
};


export const updateTenant = async (req: Request, res: Response): Promise<void> => {
    try {
        const updateResult = await tenantRepo.update(req.params.id, req.body);
        if (updateResult.affected === 0) {
            res.status(404).json({ message: "Tenant not found" });
        } else {
            res.json({ message: "Tenant updated successfully" });
        }
    } catch (error) {
        console.error("Error updating tenant:", error);
        res.status(500).json({ message: "Error updating tenant", error });
    }
};


export const deleteTenant = async (req: Request, res: Response): Promise<void> => {
    try {
        const deleteResult = await tenantRepo.delete(req.params.id);
        if (deleteResult.affected === 0) {
            res.status(404).json({ message: "Tenant not found" });
        } else {
            res.json({ message: "Tenant deleted successfully" });
        }
    } catch (error) {
        console.error("Error deleting tenant:", error);
        res.status(500).json({ message: "Error deleting tenant", error });
    }
};
