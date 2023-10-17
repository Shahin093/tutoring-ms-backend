import express from "express";
import { BookingControllers } from "./bookings.controllers";

const router = express.Router();

router.get("/", BookingControllers.getAllFromDB);

router.get("/:id", BookingControllers.getByIdFromDB);

router.patch("/:id", BookingControllers.updateOneInDB);

router.delete("/:id", BookingControllers.deleteByIdFromDB);

router.post("/create-booking", BookingControllers.insertIntoDB);

export const BookingRoutes = router;
