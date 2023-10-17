import httpStatus from "http-status";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import config from "../../../config";
import { isValidEmail } from "../auth/auth.utils";
import { IUserFilterRequest } from "./users.interfaces";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IGenericResponse } from "../../../interfaces/common";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { userSearchableFields } from "./users.constrans";

const insertInToDB = async (data: User): Promise<User> => {
  if (!isValidEmail(data?.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email is not Valid!");
  }

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

const getAllFromDB = async (
  filters: IUserFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<User[]>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (!!searchTerm) {
    andConditions.push({
      OR: userSearchableFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  // Now, andConditions may contain a search condition
  console.log(andConditions);

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  const whereConditions: any =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.user.findMany({
    include: {
      user: true,
      reviews: true,
    },
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {
            createdAt: "desc",
          },
  });
  const total = await prisma.user.count({
    where: whereConditions,
  });

  return {
    meta: {
      total,
      page,
      limit,
    },

    data: result,
  };
};

const updateOneInDB = async (
  id: string,
  payload: Partial<User>
): Promise<User> => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const getByIdFromDB = async (id: string): Promise<User | null> => {
  try {
    const result = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return result;
  } catch (error) {
    console.error("Error while querying the database:", error);
    return null;
  }
};

const deleteByIdFromDB = async (id: string): Promise<User> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });
  return result;
};

export const UsersService = {
  insertInToDB,
  getAllFromDB,
  getByIdFromDB,
  deleteByIdFromDB,
  updateOneInDB,
};
