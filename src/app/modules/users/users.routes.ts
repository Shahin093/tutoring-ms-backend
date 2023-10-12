import express from "express";
import { UsersController } from "./users.controllers";
import { FileUploadHelper } from "../../../helpers/FileUploadHelper";

const router = express.Router();

router.post(
  "/create-user",
  FileUploadHelper.upload.single("file"),
  UsersController.insertInToDB
);

export const UserRoutes = router;
