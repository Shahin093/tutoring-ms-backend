"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        serviceName: zod_1.z.string({
            required_error: "service Name is required",
        }),
        serviceCode: zod_1.z.number({
            required_error: "serviceCode is required!",
        }),
        category: zod_1.z.string({
            required_error: "category is required!",
        }),
        schedule: zod_1.z.string({
            required_error: "schedule is required!",
        }),
        service_image: zod_1.z.string({
            required_error: "image is required",
        }),
        price: zod_1.z.number({
            required_error: "price is required!",
        }),
        description: zod_1.z.string({
            required_error: "description is required!",
        }),
        serviceAuthor: zod_1.z.string({
            required_error: "serviceAuthor is required!",
        }),
        status: zod_1.z.string({
            required_error: "status is required!",
        }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        serviceName: zod_1.z.string().optional(),
        serviceCode: zod_1.z.number().optional(),
        category: zod_1.z.string().optional(),
        schedule: zod_1.z.string().optional(),
        service_image: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        description: zod_1.z.string().optional(),
        serviceAuthor: zod_1.z.string().optional(),
        status: zod_1.z.string().optional(),
    }),
});
exports.ServicesValidation = {
    create,
    update,
};
