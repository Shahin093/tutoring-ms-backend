import { Booking } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IBookingFilterRequest } from "./bookings.interfaces";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IGenericResponse } from "../../../interfaces/common";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { bookingSearchableFields } from "./bookings.constants";

const insertIntoDB = async (data: Booking): Promise<Booking> => {
  const user = await prisma.user.findUnique({
    where: { id: data.userId },
  });
  const service = await prisma.service.findUnique({
    where: { id: data.serviceid },
  });
  console.log("user : ", user);
  console.log("service : ", service);

  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, "User not found");
  }
  console.log("data", data);
  const result = await prisma.booking.create({
    data: {
      ...data,
    },
    include: {
      service: true,
      user: true,
    },
  });

  return result;
};

const getAllFromDB = async (
  filters: IBookingFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Booking[]>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (!!searchTerm) {
    andConditions.push({
      OR: bookingSearchableFields.map((field) => ({
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

  const result = await prisma.booking.findMany({
    include: {
      user: true,
      service: true,
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
  const total = await prisma.booking.count({
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
  payload: Partial<Booking>
): Promise<Booking> => {
  const result = await prisma.booking.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const getByIdFromDB = async (id: string): Promise<Booking | null> => {
  console.log("id:", id);

  try {
    const result = await prisma.booking.findUnique({
      where: {
        id,
      },
    });
    console.log("result:", result);
    return result;
  } catch (error) {
    console.error("Error while querying the database:", error);
    return null;
  }
};

const deleteByIdFromDB = async (id: string): Promise<Booking> => {
  const result = await prisma.booking.delete({
    where: {
      id,
    },
  });
  return result;
};

export const BookingServices = {
  insertIntoDB,
  getAllFromDB,
  updateOneInDB,
  getByIdFromDB,
  deleteByIdFromDB,
};
