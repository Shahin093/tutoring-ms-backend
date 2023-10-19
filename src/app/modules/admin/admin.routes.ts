import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AdminsController } from "./admin.controllers";
import { AdminValidation } from "./admin.validations";

const router = express.Router();

router.get("/", AdminsController.getAllFromDB);

router.get("/:id", AdminsController.getByIdFromDB);

router.patch(
  "/:id",
  validateRequest(AdminValidation.update),
  AdminsController.updateOneInDB
);

router.delete("/:id", AdminsController.deleteByIdFromDB);

router.post(
  "/create-admin",
  validateRequest(AdminValidation.create),
  AdminsController.insertInToDB
);

export const UserRoutes = router;
