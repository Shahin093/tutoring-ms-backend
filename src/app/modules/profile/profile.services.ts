import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";

const getMyProfileFromDB = async (userId: string) => {
  const result = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      user: {
        include: {
          service: true,
          user: true
        }
      },
      reviews: true,
    },
  });
  return result;
};

const editMyProfileFromDB = async (userId: string, data: User) => {
  const result = await prisma.user.update({
    where: {
      id: userId,
    },
    data,
  });
  return result;
};

export const ProfileServices = {
  getMyProfileFromDB,
  editMyProfileFromDB,
};
