import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ReviewServices } from "./reviews.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewServices.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review created successfully",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewServices.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review get successfully",
    data: result,
  });
});
export const ReviewControllers = {
  insertIntoDB,
  getAllFromDB,
};
