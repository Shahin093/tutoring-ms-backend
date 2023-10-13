import express from "express";
import { ReviewControllers } from "./reviews.controllers";

const router = express.Router();

router.get("/", ReviewControllers.getAllFromDB);

router.post("/create-review", ReviewControllers.insertIntoDB);

export const ReviewRoutes = router;
