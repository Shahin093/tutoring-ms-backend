"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = require("../modules/users/users.routes");
const auth_routes_1 = require("../modules/auth/auth.routes");
const profile_routes_1 = require("../modules/profile/profile.routes");
const services_routes_1 = require("../modules/services/services.routes");
const bookings_routes_1 = require("../modules/bookings/bookings.routes");
const reviews_routes_1 = require("../modules/reviews/reviews.routes");
const feedback_routes_1 = require("../modules/feedback/feedback.routes");
const content_routes_1 = require("../modules/content/content.routes");
const admin_routes_1 = require("../modules/admin/admin.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/users",
        route: users_routes_1.UserRoutes,
    },
    {
        path: "/auth",
        route: auth_routes_1.AuthRoutes,
    },
    {
        path: "/profiles",
        route: profile_routes_1.ProfileRoutes,
    },
    {
        path: "/services",
        route: services_routes_1.ServiceRoutes,
    },
    {
        path: "/bookings",
        route: bookings_routes_1.BookingRoutes,
    },
    {
        path: "/reviews",
        route: reviews_routes_1.ReviewRoutes,
    },
    {
        path: "/feedbacks",
        route: feedback_routes_1.FeedbackRoutes,
    },
    {
        path: "/contents",
        route: content_routes_1.ContentRoutes,
    },
    {
        path: "/admins",
        route: admin_routes_1.AdminRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
