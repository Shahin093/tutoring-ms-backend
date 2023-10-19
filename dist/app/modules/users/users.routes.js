"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_controllers_1 = require("./users.controllers");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const users_validations_1 = require("./users.validations");
const router = express_1.default.Router();
router.get("/", users_controllers_1.UsersController.getAllFromDB);
router.get("/:id", users_controllers_1.UsersController.getByIdFromDB);
router.patch("/:id", (0, validateRequest_1.default)(users_validations_1.UserValidation.create), users_controllers_1.UsersController.updateOneInDB);
router.delete("/:id", users_controllers_1.UsersController.deleteByIdFromDB);
router.post("/create-user", (0, validateRequest_1.default)(users_validations_1.UserValidation.create), users_controllers_1.UsersController.insertInToDB);
exports.UserRoutes = router;
