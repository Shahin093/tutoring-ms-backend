import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";

import config from "../../../config";
import sendResponse from "../../../shared/sendResponse";
import { AuthService } from "./auth.services";

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await AuthService.loginUser(loginData);
  const { refreshToken, ...others } = result;

  // set refresh token into cookie
  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };

  res.cookie("refreshToken", refreshToken, cookieOptions);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User logged in successfully!",
    token: others?.accessToken,
  });
});

export const AuthController = {
  loginUser,
};
