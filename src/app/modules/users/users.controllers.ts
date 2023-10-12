import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";
import { UsersService } from "./users.services";
import { Request, Response } from "express";
import { FileUploadHelper } from "../../../helpers/FileUploadHelper";
import { IUploadFile } from "../../../interfaces/file";
import ApiError from "../../../errors/ApiError";

const insertInToDB = catchAsync(async (req: Request, res: Response) => {
  if (req.body.data) {
    try {
      const userData = JSON.parse(req.body.data); // Parse the JSON data
      const file = req.file as IUploadFile;

      const uploadedProfileImage = await FileUploadHelper.uploadToCloudinary(
        file
      );

      if (uploadedProfileImage) {
        const modifiedUserData = {
          ...userData,
          profileImg: uploadedProfileImage.secure_url,
        };
        console.log("modifiedUserData: ", modifiedUserData);
        const result = await UsersService.insertInToDB(modifiedUserData);

        sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "User created successfully!",
          data: result,
        });
      }
    } catch (error) {
      console.error(error);
      throw new ApiError(httpStatus.BAD_REQUEST, "Invalid JSON data.");
    }
  } else {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Missing data field in the request."
    );
  }
});
export const UsersController = {
  insertInToDB,
};
