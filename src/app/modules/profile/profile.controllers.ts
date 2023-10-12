import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ProfileServices } from "./profile.services";
import sendResponse from "../../../shared/sendResponse";

const getMyProfileFromDB = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  console.log("userid", userId);
  const result = await ProfileServices.getMyProfileFromDB(userId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User logged in successfully!",
    data: result,
  });
});

export const ProfileControllers = {
  getMyProfileFromDB,
};
