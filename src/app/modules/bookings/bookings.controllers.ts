import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { BookingServices } from "./bookings.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingServices.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking created successfully",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingServices.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking Fetch successfully",
    data: result,
  });
});

export const BookingControllers = {
  insertIntoDB,
  getAllFromDB,
};
