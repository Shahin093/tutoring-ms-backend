import express from "express";
import { ProfileControllers } from "./profile.controllers";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.get(
  "/",
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.USER),
  ProfileControllers.getMyProfileFromDB
);

export const ProfileRoutes = router;
