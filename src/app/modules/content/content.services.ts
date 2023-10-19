import { Content } from "@prisma/client";
import prisma from "../../../shared/prisma";

const insertIntoDB = async (data: Content): Promise<Content> => {
  const result = await prisma.content.create({
    data,
  });
  return result;
};
const getAllFromDB = async (): Promise<Content[]> => {
  const result = await prisma.content.findMany({});
  return result;
};

export const ContentServices = {
  insertIntoDB,
  getAllFromDB,
};
