"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRelationalFieldsMapper = exports.bookingRelationalFields = exports.bookingSearchableFields = exports.bookingFilterableFields = void 0;
exports.bookingFilterableFields = [
    "searchTerm",
    "category",
    "schedule",
    "status",
    "student_type",
];
exports.bookingSearchableFields = [
    // "searchTerm",
    "category",
    "schedule",
    "status",
    "student_type",
];
exports.bookingRelationalFields = ["userId", "serviceId"];
exports.bookingRelationalFieldsMapper = {
    userId: "user",
    serviceId: "service",
};
