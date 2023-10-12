import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import prisma from "../../../shared/prisma";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import config from "../../../config";

type ILoginUser = {
  email: string;
  password: string;
};

type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
};
const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { email, password } = payload;

  //  access to our instance methods
  const isUserExists = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  // check user exits
  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exits.");
  }

  const { id: userId, role } = isUserExists;
  // create jwt access token
  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as string,
    config.jwt.expires_in as string
  );

  // create jwt refresh token
  const refreshToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.refresh_secret as string,
    config.jwt.refresh_expires_in as string
  );
  //   console.log(refreshToken);

  return {
    accessToken,
    refreshToken,
  };
};

export const AuthService = {
  loginUser,
};
