import Joi from "joi";

export const tenantSchema = Joi.object({
    companyName: Joi.string().max(100).required(),
    industry: Joi.string().max(100).required(),
    registrationNumber: Joi.string().required(),
    address: Joi.string().required(),
    country: Joi.string().max(100).required(),
    state: Joi.string().max(100).required(),
    city: Joi.string().max(100).required(),
    zipcode: Joi.string().max(10).required(),
    phone: Joi.string().max(20).required(),
    email: Joi.string().email().required(),
    logo: Joi.string().required(),
    tenantStatus: Joi.string().max(50).required(),
    createdBy: Joi.string().uuid().required(),
    updatedBy: Joi.string().uuid().required(),
});


