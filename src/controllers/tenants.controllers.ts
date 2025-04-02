import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Tenant } from "../entities/Tenant";
import { tenantSchema } from "../validation/tenant.validation";

const tenantRepo = AppDataSource.getRepository(Tenant);


export const createTenant = async (req: Request, res: Response): Promise<void> => {
    try {

        const { error } = tenantSchema.validate(req.body, { abortEarly: false });

        if (error) {
            res.status(400).json({
                message: "Validation failed"
            });
            return;
        }


        const tenantData = tenantRepo.create(req.body);
        const newTenant = await tenantRepo.save(tenantData);

        res.status(201).json({ message: "Tenant created successfully", newTenant });
    } catch (error) {

        res.status(500).json({ message: "Error creating tenant", error });
    }
};



export const getAllTenants = async (req: Request, res: Response): Promise<void> => {
    try {
        const tenants = await tenantRepo.find();
        res.json(tenants);
    } catch (error) {

        res.status(500).json({ message: "cannot get tenants ", error });
    }
};


export const getTenantById = async (req: Request, res: Response): Promise<void> => {
    try {
        const tenant = await tenantRepo.findOneBy({ tenantId: parseInt(req.params.id) });
        if (tenant) {
            res.json(tenant);
        } else {
            res.status(404).json({ message: "tenant is not there" });
        }
    } catch (error) {

        res.status(500).json({ message: "can not get tenant", error });
    }
};


export const updateTenant = async (req: Request, res: Response): Promise<void> => {
    try {

        const { error } = tenantSchema.validate(req.body, { abortEarly: false });

        if (error) {
            res.status(400).json({
                message: "Validation failed"
            });
        }


        const updateResult = await tenantRepo.update(req.params.id, req.body);
        if (updateResult.affected === 0) {
            res.status(404).json({ message: "tenant is not there" });
        } else {
            res.json({ message: "made chage in tenant" });
        }
    } catch (error) {

        res.status(500).json({ message: "cannot update the tenant", error });
    }
};


export const deleteTenant = async (req: Request, res: Response): Promise<void> => {
    try {
        const deleteResult = await tenantRepo.delete(req.params.id);
        if (deleteResult.affected === 0) {
            res.status(404).json({ message: "tenant is not there" });
        } else {
            res.json({ message: "Tenant deleted successfully" });
        }
    } catch (error) {

        res.status(500).json({ message: "cannot delete tenant", error });
    }
};
