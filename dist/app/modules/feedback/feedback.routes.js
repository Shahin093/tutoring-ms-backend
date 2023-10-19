"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackRoutes = void 0;
const express_1 = __importDefault(require("express"));
const feedback_controllers_1 = require("./feedback.controllers");
const router = express_1.default.Router();
router.get("/", feedback_controllers_1.FeedbackControllers.getAllFromDB);
router.post("/create-feedback", feedback_controllers_1.FeedbackControllers.insertIntoDB);
exports.FeedbackRoutes = router;
