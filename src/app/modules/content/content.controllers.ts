import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ContentServices } from "./content.services";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ContentServices.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Content created successfully",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ContentServices.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Contents get successfully",
    data: result,
  });
});
export const ContentControllers = {
  insertIntoDB,
  getAllFromDB,
};
