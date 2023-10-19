import express from "express";
import { FeedbackControllers } from "./feedback.controllers";

const router = express.Router();

router.get("/", FeedbackControllers.getAllFromDB);

router.post("/create-feedback", FeedbackControllers.insertIntoDB);

export const FeedbackRoutes = router;
