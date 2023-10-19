"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const services_controllers_1 = require("./services.controllers");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const services_validations_1 = require("./services.validations");
const router = express_1.default.Router();
router.get("/", services_controllers_1.ServiceControllers.getAllFromDB);
router.get("/:id", services_controllers_1.ServiceControllers.getByIdFromDB);
router.patch("/:id", services_controllers_1.ServiceControllers.updateOneInDB);
router.delete("/:id", services_controllers_1.ServiceControllers.deleteByIdFromDB);
router.post("/create-service", (0, validateRequest_1.default)(services_validations_1.ServicesValidation.create), services_controllers_1.ServiceControllers.insertIntoDB);
exports.ServiceRoutes = router;
