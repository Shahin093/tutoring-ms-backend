import httpStatus from "http-status";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import { Admin, User } from "@prisma/client";
import bcrypt from "bcrypt";
import config from "../../../config";
import { isValidEmail } from "../auth/auth.utils";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IGenericResponse } from "../../../interfaces/common";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { IAdminFilterRequest } from "./admin.interface";
import { adminSearchableFields } from "./admin.constants";

const insertInToDB = async (data: Admin): Promise<Admin> => {
  if (!isValidEmail(data?.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email is not Valid!");
  }

  const isExistEmail = await prisma.admin.findUnique({
    where: {
      email: data?.email,
    },
  });

  const byPassword = await bcrypt.hash(
    data.password,
    Number(config.bycrypt_salt_rounds)
  );

  if (isExistEmail) {
    throw new ApiError(httpStatus.BAD_REQUEST, "User Already Regis.");
  }

  data.password = byPassword;

  const result = await prisma.admin.create({
    data,
  });
  return result;
};

const getAllFromDB = async (
  filters: IAdminFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Admin[]>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (!!searchTerm) {
    andConditions.push({
      OR: adminSearchableFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

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

  const result = await prisma.admin.findMany({
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
  const total = await prisma.admin.count({
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
  payload: Partial<Admin>
): Promise<Admin> => {
  const result = await prisma.admin.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const getByIdFromDB = async (id: string): Promise<Admin | null> => {
  try {
    const result = await prisma.admin.findUnique({
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
  const result = await prisma.admin.delete({
    where: {
      id,
    },
  });
  return result;
};

export const AdminsService = {
  insertInToDB,
  getAllFromDB,
  getByIdFromDB,
  deleteByIdFromDB,
  updateOneInDB,
};
