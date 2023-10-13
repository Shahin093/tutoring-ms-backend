import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ServiceServices } from "./services.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import pick from "../../../shared/pick";
import { serviceFilterableFields } from "./services.constants";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceServices.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service created successfully",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, serviceFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const result = await ServiceServices.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "service fetched successfully",
    meta: result.meta,
    data: result.data,
  });
});

export const ServiceControllers = {
  insertIntoDB,
  getAllFromDB,
};
