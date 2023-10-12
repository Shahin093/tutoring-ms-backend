import express from "express";
import { AuthController } from "./auth.controllers";

const router = express.Router();

router.post("/signin", AuthController.loginUser);

export const AuthRoutes = router;
