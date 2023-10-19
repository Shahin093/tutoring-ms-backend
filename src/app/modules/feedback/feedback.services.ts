import { Feedback } from "@prisma/client";
import prisma from "../../../shared/prisma";

const insertIntoDB = async (data: Feedback): Promise<Feedback> => {
  const result = await prisma.feedback.create({
    data,
  });
  return result;
};
const getAllFromDB = async (): Promise<Feedback[]> => {
  const result = await prisma.feedback.findMany({});
  return result;
};

export const FeedbackServices = {
  insertIntoDB,
  getAllFromDB,
};
