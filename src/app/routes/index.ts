import express from "express";
import { UserRoutes } from "../modules/users/users.routes";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { ProfileRoutes } from "../modules/profile/profile.routes";
import { ServiceRoutes } from "../modules/services/services.routes";
import { BookingRoutes } from "../modules/bookings/bookings.routes";
import { ReviewRoutes } from "../modules/reviews/reviews.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/profiles",
    route: ProfileRoutes,
  },
  {
    path: "/services",
    route: ServiceRoutes,
  },
  {
    path: "/bookings",
    route: BookingRoutes,
  },
  {
    path: "/reviews",
    route: ReviewRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
