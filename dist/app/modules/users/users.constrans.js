"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRelationalFieldsMapper = exports.userRelationalFields = exports.userSearchableFields = exports.userFilterableFields = void 0;
exports.userFilterableFields = [
    "searchTerm",
    "role",
    "name",
    "email",
    "contactNo",
    "address",
];
exports.userSearchableFields = [
    "role",
    "name",
    "email",
    "contactNo",
    "address",
];
exports.userRelationalFields = ["userId", "serviceId"];
exports.userRelationalFieldsMapper = {
    userId: "user",
    serviceId: "service",
};
