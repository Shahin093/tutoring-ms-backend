import express from "express";
import { UsersController } from "./users.controllers";

const router = express.Router();

router.get("/", UsersController.getAllFromDB);

router.get("/:id", UsersController.getByIdFromDB);

router.patch("/:id", UsersController.updateOneInDB);

router.delete("/:id", UsersController.deleteByIdFromDB);

router.post("/create-user", UsersController.insertInToDB);

export const UserRoutes = router;
