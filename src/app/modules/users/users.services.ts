import httpStatus from "http-status";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import config from "../../../config";

const insertInToDB = async (data: User): Promise<User> => {
  const isExistEmail = await prisma.user.findUnique({
    where: {
      email: data?.email,
    },
  });

  const byPassword = await bcrypt.hash(
    data.password,
    Number(config.bycrypt_salt_rounds)
  );

  console.log("byPassword", byPassword);

  if (isExistEmail) {
    throw new ApiError(httpStatus.BAD_REQUEST, "User Already Regis.");
  }

  data.password = byPassword;

  const result = await prisma.user.create({
    data,
  });
  return result;
};

export const UsersService = {
  insertInToDB,
};
