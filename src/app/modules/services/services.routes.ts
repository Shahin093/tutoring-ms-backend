import express from "express";
import { ServiceControllers } from "./services.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { ServicesValidation } from "./services.validations";

const router = express.Router();

router.get("/", ServiceControllers.getAllFromDB);
// {
//     "serviceName":"English",
//     "serviceCode": 4563,
//     "category":"MONTHLY",
//     "schedule":"AFTERNOON_4_6",
//     "price":5999,
//     "description":"This is a good Package in the world.",
//     "location":"Dhaka",
//     "serviceAuthor":"MD Shidul",
//     "status":  "ONGOING",
//     "service_image":"shahin.png"
// }

router.patch("/:id", ServiceControllers.updateOneInDB);

router.get("/:id", ServiceControllers.getByIdFromDB);

router.delete("/:id", ServiceControllers.deleteByIdFromDB);

router.post(
  "/create-service",
  validateRequest(ServicesValidation.create),
  ServiceControllers.insertIntoDB
);

export const ServiceRoutes = router;
