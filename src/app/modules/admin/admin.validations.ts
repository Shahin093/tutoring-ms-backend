import { z } from "zod";

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: "name Name is required",
    }),

    email: z.string({
      required_error: "Email is required!",
    }),
    password: z.string({
      required_error: "password is required!",
    }),
    profileImg: z.string({
      required_error: "profileImg is required",
    }),
    contactNo: z.string({
      required_error: "contact No is required",
    }),
  }),
});

const update = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    profileImg: z.string().optional(),
    contactNo: z.string().optional(),
  }),
});

export const AdminValidation = {
  create,
  update,
};
