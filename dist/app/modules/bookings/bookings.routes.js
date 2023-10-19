"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bookings_controllers_1 = require("./bookings.controllers");
const router = express_1.default.Router();
router.get("/", bookings_controllers_1.BookingControllers.getAllFromDB);
router.get("/:id", bookings_controllers_1.BookingControllers.getByIdFromDB);
router.patch("/:id", bookings_controllers_1.BookingControllers.updateOneInDB);
router.delete("/:id", bookings_controllers_1.BookingControllers.deleteByIdFromDB);
router.post("/create-booking", bookings_controllers_1.BookingControllers.insertIntoDB);
exports.BookingRoutes = router;
