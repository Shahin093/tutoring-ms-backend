"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controllers_1 = require("./auth.controllers");
const router = express_1.default.Router();
router.post("/signin", auth_controllers_1.AuthController.loginUser);
exports.AuthRoutes = router;
