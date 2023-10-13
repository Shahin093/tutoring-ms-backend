import { Review } from "@prisma/client";
import prisma from "../../../shared/prisma";

const insertIntoDB = async (data: Review): Promise<Review> => {
  const result = await prisma.review.create({
    data,
    include: {
      service: true,
      user: true,
    },
  });
  return result;
};
const getAllFromDB = async (): Promise<Review[]> => {
  const result = await prisma.review.findMany({
    include: {
      service: true,
      user: true,
    },
  });
  return result;
};

export const ReviewServices = {
  insertIntoDB,
  getAllFromDB,
};
