import express from "express";
import { ContentControllers } from "./content.controllers";

const router = express.Router();

router.get("/", ContentControllers.getAllFromDB);

router.post("/create-content", ContentControllers.insertIntoDB);

export const ContentRoutes = router;
