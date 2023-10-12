import prisma from "../../../shared/prisma";

const getMyProfileFromDB = async (userId: string) => {
  const result = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
  return result;
};

export const ProfileServices = {
  getMyProfileFromDB,
};
