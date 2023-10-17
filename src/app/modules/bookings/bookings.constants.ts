export const bookingFilterableFields: string[] = [
  "searchTerm",
  "category",
  "schedule",
  "status",
  "student_type",
];

export const bookingSearchableFields: string[] = [
  // "searchTerm",
  "category",
  "schedule",
  "status",
  "student_type",
];

export const bookingRelationalFields: string[] = ["userId", "serviceId"];
export const bookingRelationalFieldsMapper: { [key: string]: string } = {
  userId: "user",
  serviceId: "service",
};
