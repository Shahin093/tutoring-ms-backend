"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const content_controllers_1 = require("./content.controllers");
const router = express_1.default.Router();
router.get("/", content_controllers_1.ContentControllers.getAllFromDB);
router.post("/create-content", content_controllers_1.ContentControllers.insertIntoDB);
exports.ContentRoutes = router;
