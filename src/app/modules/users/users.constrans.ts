export const userFilterableFields: string[] = [
  "searchTerm",
  "role",
  "name",
  "email",
  "contactNo",
  "address",
];

export const userSearchableFields: string[] = [
  "role",
  "name",
  "email",
  "contactNo",
  "address",
];

export const userRelationalFields: string[] = ["userId", "serviceId"];
export const userRelationalFieldsMapper: { [key: string]: string } = {
  userId: "user",
  serviceId: "service",
};
