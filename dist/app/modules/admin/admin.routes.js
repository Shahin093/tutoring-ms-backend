"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const admin_controllers_1 = require("./admin.controllers");
const admin_validations_1 = require("./admin.validations");
const router = express_1.default.Router();
router.get("/", admin_controllers_1.AdminsController.getAllFromDB);
router.get("/:id", admin_controllers_1.AdminsController.getByIdFromDB);
router.patch("/:id", (0, validateRequest_1.default)(admin_validations_1.AdminValidation.update), admin_controllers_1.AdminsController.updateOneInDB);
router.delete("/:id", admin_controllers_1.AdminsController.deleteByIdFromDB);
router.post("/create-admin", (0, validateRequest_1.default)(admin_validations_1.AdminValidation.create), admin_controllers_1.AdminsController.insertInToDB);
exports.AdminRoutes = router;
