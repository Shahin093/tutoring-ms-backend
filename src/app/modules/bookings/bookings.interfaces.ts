export type IBooking = {};

export type IServiceFilterRequest = {
  searchTerm?: string | undefined;
  serviceName?: string | undefined;
  serviceCode?: number | undefined;
  category?: string | undefined;
  price?: string | undefined;
  schedule?: string | undefined;
  status?: string | undefined;
  location?: string | undefined;
  serviceFeatures?: string | undefined;
};

export type IStudentMyCoursesRequest = {
  academicSemesterId?: string | undefined;
  courseId?: string | undefined;
};

export type IStudentMyCourseSchedulesRequest = {
  academicSemesterId?: string | undefined;
  courseId?: string | undefined;
};
