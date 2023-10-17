export const userFilterableFields: string[] = [
  "searchTerm",
  "location",
  "name",
  "email",
];

export const userSearchableFields: string[] = [
  // ,
  "category",
  "schedule",
  "status",
  "student_type",
];

export const userRelationalFields: string[] = ["userId", "serviceId"];
export const userRelationalFieldsMapper: { [key: string]: string } = {
  userId: "user",
  serviceId: "service",
};
