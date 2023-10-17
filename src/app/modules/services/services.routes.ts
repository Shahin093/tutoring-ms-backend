import express from "express";
import { ServiceControllers } from "./services.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { ServicesValidation } from "./services.validations";

const router = express.Router();

router.get("/", ServiceControllers.getAllFromDB);
router.get("/:id", ServiceControllers.getByIdFromDB);

router.patch("/:id", ServiceControllers.updateOneInDB);



router.delete("/:id", ServiceControllers.deleteByIdFromDB);

router.post(
  "/create-service",
  validateRequest(ServicesValidation.create),
  ServiceControllers.insertIntoDB
);

export const ServiceRoutes = router;
