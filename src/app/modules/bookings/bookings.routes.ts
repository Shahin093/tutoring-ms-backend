import express from "express";
import { BookingControllers } from "./bookings.controllers";

const router = express.Router();

router.get("/", BookingControllers.getAllFromDB);

router.post("/create-booking", BookingControllers.insertIntoDB);

export const BookingRoutes = router;
