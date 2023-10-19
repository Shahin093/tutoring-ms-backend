import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { FeedbackServices } from "./feedback.services";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedbackServices.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "feedback created successfully",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedbackServices.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "feedbacks get successfully",
    data: result,
  });
});
export const FeedbackControllers = {
  insertIntoDB,
  getAllFromDB,
};
