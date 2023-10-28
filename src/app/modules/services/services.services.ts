import { Prisma, Service } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { IServiceFilterRequest } from "./services.interfaces";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IGenericResponse } from "../../../interfaces/common";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import {
  serviceRelationalFields,
  serviceRelationalFieldsMapper,
  serviceSearchableFields,
} from "./services.constants";
import {
  bookingRelationalFields,
  bookingRelationalFieldsMapper,
} from "../bookings/bookings.constants";

const insertIntoDB = async (data: Service): Promise<Service> => {
  const result = await prisma.service.create({
    data,
  });

  return result;
};

// const getAllFromDB = async (
//   filters: IServiceFilterRequest,
//   options: IPaginationOptions
// ): Promise<IGenericResponse<Service[]>> => {
//   const { limit, page, skip } = paginationHelpers.calculatePagination(options);
//   const { searchTerm, ...filterData } = filters;
//   console.log("searchTerm : ", searchTerm);
//   console.log("filterData : ", filterData);
//   const andConditions = [];

//   if (!!searchTerm) {
//     andConditions.push({
//       OR: serviceSearchableFields.map((field) => ({
//         [field]: {
//           contains: searchTerm,
//           mode: "insensitive",
//         },
//       })),
//     });
//   }

//   // Now, andConditions may contain a search condition
//   console.log("andConditions", andConditions);

//   if (Object.keys(filterData).length > 0) {
//     andConditions.push({
//       AND: Object.keys(filterData).map((key) => ({
//         [key]: {
//           equals: (filterData as any)[key],
//         },
//       })),
//     });
//   }

//   const whereConditions: any =
//     andConditions.length > 0 ? { AND: andConditions } : {};

//   const result = await prisma.service.findMany({
//     include: {
//       service: true,
//       reviews: true,
//     },
//     where: whereConditions,
//     skip,
//     take: limit,

//     orderBy:
//       options.sortBy && options.sortOrder
//         ? { [options.sortBy]: options.sortOrder }
//         : {
//             createdAt: "desc",
//           },
//   });
//   const total = await prisma.service.count({
//     where: whereConditions,
//   });

//   return {
//     meta: {
//       total,
//       page,
//       limit,
//     },
//     data: result,
//   };
// };

const getAllFromDB = async (
  filters: IServiceFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Service[]>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;
  console.log("searchTerm : ", searchTerm);
  console.log("filterData : ", filterData);
  const andConditions = [];

  if (!!searchTerm) {
    andConditions.push({
      OR: serviceSearchableFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  // Now, andConditions may contain a search condition
  console.log("andConditions", andConditions);

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

  const result = await prisma.service.findMany({
    include: {
      service: true,
      reviews: true,
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
  const total = await prisma.service.count({
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
  payload: Partial<Service>
): Promise<Service> => {
  const result = await prisma.service.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const getByIdFromDB = async (id: string): Promise<Service | null> => {
  console.log("id:", id);

  try {
    const result = await prisma.service.findUnique({
      include: {
        service: true,
        reviews: true,
      },
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

const deleteByIdFromDB = async (id: string): Promise<Service> => {
  const result = await prisma.service.delete({
    where: {
      id,
    },
  });
  return result;
};

export const ServiceServices = {
  insertIntoDB,
  getAllFromDB,
  updateOneInDB,
  getByIdFromDB,
  deleteByIdFromDB,
};
