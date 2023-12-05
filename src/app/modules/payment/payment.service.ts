import { PaymentStatus, Prisma, UserPayment } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { sslService } from "../ssl/ssl.service";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { IGenericResponse } from "../../../interfaces/common";
import { paymentSearchableFields } from "./payment.constants";

const initPayment = async (data: any) => {
  const paymentSession = await sslService.initPayment({
    total_amount: data.amount,
    tran_id: data.transactionId,
    cus_name: data.studentName,
    cus_email: data.studentEmail,
    cus_add1: data.address,
    cus_phone: data.phone,
  });

  await prisma.userPayment.create({
    data: {
      amount: data?.amount,
      userId: data?.userId,
      serviceid: data?.serviceid,
      transactionId: data.transactionId,
    },
  });
  console.log(paymentSession?.redirectGatewayURL);
  return paymentSession.redirectGatewayURL;
};

const webhook = async (payload: any) => {
  if (!payload || !payload?.status || payload?.status !== "VALID") {
    return {
      massage: "Invalid Payment!",
    };
  }
  const result = await sslService.validate(payload);

  if (result?.status !== "VALID") {
    return {
      massage: "Payment failed",
    };
  }

  const { tran_id } = result;
  await prisma.userPayment.updateMany({
    where: {
      transactionId: tran_id,
    },
    data: {
      paymentStatus: PaymentStatus.FULL_PAID,
      paymentGatewayData: payload,
    },
  });

  return {
    massage: "Payment Success",
  };
};

const getAllFromDB = async (
  filters: any,
  options: any
): Promise<IGenericResponse<UserPayment[]>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: paymentSearchableFields.map((field) => ({
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

  const whereConditions: Prisma.UserPaymentWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.userPayment.findMany({
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
  const total = await prisma.userPayment.count({
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

const getByIdFromDB = async (id: string): Promise<UserPayment | null> => {
  const result = await prisma.userPayment.findUnique({
    where: {
      id,
    },
  });
  return result;
};

export const PaymentService = {
  initPayment,
  webhook,
  getAllFromDB,
  getByIdFromDB,
};
