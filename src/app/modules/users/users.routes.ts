import express from "express";
import { UsersController } from "./users.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./users.validations";

const router = express.Router();

router.get("/", UsersController.getAllFromDB);

router.get("/:id", UsersController.getByIdFromDB);

router.patch(
  "/:id",
  validateRequest(UserValidation.create),
  UsersController.updateOneInDB
);

router.delete("/:id", UsersController.deleteByIdFromDB);

router.post(
  "/create-user",
  validateRequest(UserValidation.create),
  UsersController.insertInToDB
);

export const UserRoutes = router;
