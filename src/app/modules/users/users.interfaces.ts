export type IBooking = {};

export type IUserFilterRequest = {
  searchTerm?: string | undefined;
  category?: string | undefined;
  schedule?: string | undefined;
  status?: string | undefined;
  student_type?: string | undefined;
};
