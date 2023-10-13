import { z } from "zod";

const create = z.object({
  body: z.object({
    serviceName: z.string({
      required_error: "service Name is required",
    }),
    serviceCode: z.number({
      required_error: "serviceCode is required!",
    }),
    category: z.string({
      required_error: "category is required!",
    }),
    schedule: z.string({
      required_error: "schedule is required!",
    }),
    service_image: z.string({
      required_error: "image is required",
    }),
    price: z.number({
      required_error: "price is required!",
    }),
    description: z.string({
      required_error: "description is required!",
    }),
    serviceAuthor: z.string({
      required_error: "serviceAuthor is required!",
    }),
    status: z.string({
      required_error: "status is required!",
    }),
  }),
});

const update = z.object({
  body: z.object({
    serviceName: z.string().optional(),
    serviceCode: z.number().optional(),
    category: z.string().optional(),
    schedule: z.string().optional(),
    service_image: z.string().optional(),
    price: z.number().optional(),
    description: z.string().optional(),
    serviceAuthor: z.string().optional(),
    status: z.string().optional(),
  }),
});

export const ServicesValidation = {
  create,
  update,
};
