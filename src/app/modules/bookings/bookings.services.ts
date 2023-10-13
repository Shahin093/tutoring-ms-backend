import { Booking } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";

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

const getAllFromDB = async (): Promise<Booking[]> => {
  const result = await prisma.booking.findMany({
    include: {
      service: true,
      user: true,
    },
  });
  return result;
};

export const BookingServices = {
  insertIntoDB,
  getAllFromDB,
};
