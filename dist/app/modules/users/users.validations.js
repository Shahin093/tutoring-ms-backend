"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "name Name is required",
        }),
        email: zod_1.z.string({
            required_error: "Email is required!",
        }),
        password: zod_1.z.string({
            required_error: "password is required!",
        }),
        profileImg: zod_1.z.string({
            required_error: "profileImg is required",
        }),
        contactNo: zod_1.z.string({
            required_error: "contact No is required",
        }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        password: zod_1.z.string().optional(),
        profileImg: zod_1.z.string().optional(),
        contactNo: zod_1.z.string().optional(),
    }),
});
exports.UserValidation = {
    create,
    update,
};
