export type IBooking = {};

export type IBookingFilterRequest = {
  searchTerm?: string | undefined;
  category?: string | undefined;
  schedule?: string | undefined;
  status?: string | undefined;
  student_type?: string | undefined;
};

export type IStudentMyCoursesRequest = {
  academicSemesterId?: string | undefined;
  courseId?: string | undefined;
};

export type IStudentMyCourseSchedulesRequest = {
  academicSemesterId?: string | undefined;
  courseId?: string | undefined;
};
