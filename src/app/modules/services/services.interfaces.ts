export type IService = {
  serviceName: string;
  serviceCode: number;
  category: string;
  schedule: string;
  service_image: string;
  price: number;
  description: string;
  per_course_students?: number;
  acceptable_students?: number;
  location: string;
  serviceAuthor: string;
  status: string;
  //   serviceFeatures: string[];
  //   serviceAssignmentCount: number;
};

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
