"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const config_1 = __importDefault(require("../../../config"));
const auth_utils_1 = require("./auth.utils");
// {
//   "email":"sishahin093@gmail.com",
//   "password":"103511"
// }
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = payload;
    if (!(0, auth_utils_1.isValidEmail)(email)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Email is not Valid!");
    }
    //  access to our instance methods
    const isUserExists = yield prisma_1.default.user.findFirst({
        where: {
            email: email,
        },
    });
    // check user exits
    if (!isUserExists) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User does not exits.");
    }
    const { id: userId, role } = isUserExists;
    // create jwt access token
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ userId, role }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    // create jwt refresh token
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ userId, role }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    //   console.log(refreshToken);
    return {
        accessToken,
        refreshToken,
    };
});
exports.AuthService = {
    loginUser,
};
